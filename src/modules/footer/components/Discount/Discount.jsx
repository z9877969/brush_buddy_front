import { useState, useEffect, useCallback } from 'react';
import s from './Discount.module.scss';
import { Field, Form, Formik } from 'formik';
import Modal from '../ModalConditions/ModalConditions';
import { toastify } from 'helpers';

const Discount = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [shortNumberError, setShortNumberError] = useState(false);

  useEffect(() => {
    const storedNumbers = localStorage.getItem('phoneNumbers');
    if (storedNumbers) {
      setPhoneNumbers(JSON.parse(storedNumbers));
    }
  }, []);

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,7})$/);
    if (match) {
      return (
        '+38 0' + (match[2] ? +match[2] : '') + (match[3] ? ' ' + match[3] : '')
      );
    }
    return value;
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;

    const lastChar = value.charAt(value.length - 1);
    if (isNaN(lastChar)) {
      return;
    }

    setPhoneNumber(value);
    setFormattedPhoneNumber(formatPhoneNumber(value));
    if (value.length < 15) {
      setShortNumberError(true);
    } else {
      setShortNumberError(false);
    }
  };

  const handlePhoneNumberFocus = () => {
    if (!formattedPhoneNumber) {
      setFormattedPhoneNumber('+38 0');
    }
  };

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setSubmitClicked(true);

      if (!checkboxChecked) {
        setCheckboxChecked(true);
        return;
      }

      if (phoneNumber.length < 15) {
        setShortNumberError(true);
        return;
      }

      if (phoneNumbers.includes(phoneNumber)) {
        setDiscountApplied(true);
      } else {
        const updatedNumbers = [...phoneNumbers, phoneNumber];
        setPhoneNumbers(updatedNumbers);
        localStorage.setItem('phoneNumbers', JSON.stringify(updatedNumbers));
        setPhoneNumber('');
        setFormattedPhoneNumber('');
        setDiscountApplied(false);
        setShortNumberError(false);
        toastify.success(
          'Номер телефону успішно зареєстровано для отрмання знижки!'
        );
        // console.log('Масив номерів:', updatedNumbers);
      }
    },
    [checkboxChecked, phoneNumber, phoneNumbers]
  );

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = '';
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={s.discountDiv}>
        <h2 className={s.discountTitle}>
          Знижка <span className={s.span}>- 10%</span> на перше замовлення
          сховалася тут
        </h2>

        <Formik initialValues={{ number: '' }} onSubmit={handleSubmit}>
          <Form className={s.form} onSubmit={handleFormSubmit}>
            <div className={s.numberFieldDiv}>
              <Field
                type="tel"
                className={s.numberField}
                placeholder="Номер телефону"
                name="number"
                value={formattedPhoneNumber}
                onChange={handlePhoneNumberChange}
                onFocus={handlePhoneNumberFocus}
                id="numberField"
                maxLength="15"
                required
              />
              <label className={s.numberFieldLabel} htmlFor="numberField">
                Номер телефону
              </label>

              {shortNumberError && (
                <p className={s.discountAppliedText}>
                  Номер телефону занадто короткий
                </p>
              )}

              {discountApplied && (
                <p className={s.discountAppliedText}>
                  На цей номер знижка вже використана
                </p>
              )}
            </div>
            <div>
              <div className={s.checkboxFieldLabel}>
                <Field
                  type="checkbox"
                  className={s.checkboxField}
                  id="checkboxField"
                  name="checkboxField"
                  checked={checkboxChecked}
                  onChange={handleCheckboxChange}
                />
                <p>
                  Я погоджуюся з умовами обробки{' '}
                  <span className={s.spanConditions} onClick={openModal}>
                    персональних даних
                  </span>
                </p>
              </div>
              {submitClicked && !checkboxChecked && (
                <p className={s.discountAppliedText}>
                  Доступ обмежено без згоди
                </p>
              )}
            </div>
            <button className={s.btn} type="submit">
              Отримати
            </button>
          </Form>
        </Formik>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Discount;
