import s from './Discount.module.scss';
import { Field, Form, Formik } from 'formik';

const Discount = () => {
  return (
    <div className={s.discountDiv}>
      <h2 className={s.discountTitle}>
        Знижка <span className={s.span}>- 10%</span> на перше замовлення
        сховалася тут
      </h2>

      <Formik>
        <Form className={s.form}>
          <Field
            className={s.numberField}
            placeholder="Номер телефону"
            name="number"
          />
          <label htmlFor="checkboxField" className={s.checkboxFieldLabel}>
            <Field
              type="checkbox"
              className={s.checkboxField}
              id="checkboxField"
            />
            <p>
              Я погоджуюсь з умовами обробки{' '}
              <span className={s.span}>персональних даних</span>
            </p>
          </label>
          <button className={s.btn} type="submit">
            Отримати
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Discount;
