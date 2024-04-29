import { useState } from 'react';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Modal from '../ModalConditions/ModalConditions';
import { toastify } from 'helpers';
import s from './Discount.module.scss';
import { brushbuddyApi as bbApi } from 'services';
import clsx from 'clsx';

const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^\+38\s\d{3}\s\d{7}$/, 'Невалідна регулярка')
    .required("Обов'язково"),
});

const Discount = () => {
  const [discountApplied] = useState(false);
  const [promoData, setPromoData] = useState(null);

  const [flipped, setFlipped] = useState(false);

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

  const handleSubmit = async (values, { resetForm, setFieldTouched }) => {
    if (!values.checkboxField) {
      setFieldTouched('checkboxField', true);
      return;
    }

    try {
      const normalizedPhone = values.phone.split(' ').join('');
      const data = await bbApi.getFirstBuyPromo({ phone: normalizedPhone });

      const { phone, promocode } = data;
      setPromoData({ phone, promocode });
      setFlipped((p) => !p);

      toastify.success(
        'Номер телефону успішно зареєстровано для отрмання знижки!'
      );

      resetForm();
    } catch (error) {
      toastify.error('Виникла помилка, спробуйте ще раз :(');
    }
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
        <div className={clsx(s.cardInner, s.front, flipped && s.flipped)}>
          <h2 className={s.discountTitle}>
            Знижка <span className={s.span}>- 10%</span> на перше замовлення
            сховалася тут
          </h2>
          <Formik
            initialValues={{ phone: '+38 0', checkboxField: false }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched, values }) => (
              <Form className={s.form}>
                <div className={s.numberFieldDiv}>
                  <Field
                    type="tel"
                    className={s.numberField}
                    placeholder="Номер телефону"
                    name="phone"
                    onChange={(e) => {
                      const { value } = e.target;
                      const lastChar = value.charAt(value.length - 1);
                      if (isNaN(lastChar)) {
                        return;
                      }
                      setFieldValue('phone', formatPhoneNumber(value));
                    }}
                    id="numberField"
                    maxLength="15"
                    required
                  />
                  <label className={s.numberFieldLabel} htmlFor="numberField">
                    Номер телефону
                  </label>

                  {errors.phone && touched.phone && (
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
                <div className={s.checkboxWrapper}>
                  <div className={s.checkboxFieldLabel}>
                    <Field
                      type="checkbox"
                      className={s.checkboxField}
                      id="checkboxField"
                      name="checkboxField"
                    />
                    <p>
                      Я погоджуюся з умовами обробки{' '}
                      <span className={s.spanConditions} onClick={openModal}>
                        персональних даних
                      </span>
                    </p>
                  </div>
                  {touched.checkboxField && !values.checkboxField && (
                    <p className={s.discountAppliedText}>
                      Доступ обмежено без згоди
                    </p>
                  )}
                </div>
                <button className={s.btn} type="submit">
                  Отримати
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {true && (
          <div className={clsx(s.cardInner, s.back, flipped && s.flipped)}>
            <h2 className={s.discountTitle}>
              Ваш промокод{' '}
              <span className={s.span}>{promoData?.promocode}</span> дійсний при
              доставці з номером телефону{' '}
              <span className={s.span}>{promoData?.phone}</span>
            </h2>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Discount;
