import { useState, useEffect } from 'react';
import s from './Discount.module.scss';
import { Field, Form, Formik } from 'formik';

const Discount = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  useEffect(() => {
    const storedNumbers = localStorage.getItem('phoneNumbers');
    if (storedNumbers) {
      setPhoneNumbers(JSON.parse(storedNumbers));
    }
  }, []);

  const formatPhoneNumber = (value) => {
    const cleaned = ('' + value).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,2})(\d{0,3})$/);
    if (match) {
      return (
        '+38 0' + (match[2] ? +match[2] : '') + (match[3] ? ' ' + match[3] : '')
      );
    }
    return value;
  };

  const handlePhoneNumberChange = (e) => {
    const { value } = e.target;
    setPhoneNumber(value);
    setFormattedPhoneNumber(formatPhoneNumber(value));
  };

  const handlePhoneNumberFocus = () => {
    if (!formattedPhoneNumber) {
      setFormattedPhoneNumber('+38 0');
    }
  };

  const handleCheckboxChange = (e) => {
    setCheckboxChecked(e.target.checked);
  };

  const handleFormSubmit = () => {
    setSubmitClicked(true);
    if (!checkboxChecked) {
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
      // console.log('Масив номерів:', updatedNumbers);
    }
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <div className={s.discountDiv}>
      <h2 className={s.discountTitle}>
        Знижка <span className={s.span}>- 10%</span> на перше замовлення
        сховалася тут
      </h2>

      <Formik initialValues={{ number: '' }} onSubmit={handleSubmit}>
        <Form className={s.form}>
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
            />
            <label className={s.numberFieldLabel} htmlFor="numberField">
              Номер телефону
            </label>

            {discountApplied && (
              <p className={s.discountAppliedText}>
                На цей номер знижка вже використана
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="checkboxField"
              className={s.checkboxFieldLabel}
              required
            >
              <Field
                type="checkbox"
                className={s.checkboxField}
                id="checkboxField"
                name="checkboxField"
                checked={checkboxChecked}
                onChange={handleCheckboxChange}
              />
              <p>
                Я погоджуюсь з умовами обробки{' '}
                <span className={s.span}>персональних даних</span>
              </p>
            </label>
            {submitClicked && !checkboxChecked && (
              <p className={s.discountAppliedText}>Доступ обмежено без згоди</p>
            )}
          </div>
          <button className={s.btn} type="submit" onClick={handleFormSubmit}>
            Отримати
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Discount;
