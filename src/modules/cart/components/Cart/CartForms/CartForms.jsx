import Select from 'react-select';
import { selectStyles } from './SelectStyles';
import { useDebounceValue } from 'usehooks-ts';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { sprite } from 'shared/icons';

import { clsx } from 'clsx';

import s from './CartForms.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiGetCity } from '@redux/novaPoshta/novaPoshtaSlice';

const options = [
  { label: 'one', value: 1, className: 'custom-class' },
  { label: 'two', value: 2, className: 'awesome-class' },
];

const CartForms = () => {
  const dispatch = useDispatch();
  // const postOffice = useSelector(selectPostOffice);
  const [debouncedValue, setValue] = useDebounceValue('', 1000);
  const maxLength = 300;

  useEffect(() => {
    dispatch(apiGetCity(debouncedValue));
  }, [dispatch, debouncedValue]);

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Введіть повністю ПІБ')
      .max(50, 'Занадто довге ПІБ')
      .required('Поле обов`язкове для заповнення'),
    email: Yup.string()
      .email('Введіть дійсну адресу ел. пошти')
      .required('Поле обов`язкове для заповнення'),
    phone: Yup.string()
      .matches(/^\+?3?8?(0\d{9})$/, 'Введіть коректний номер телефону')
      .required('Поле обов`язкове для заповнення'),
    city: Yup.string().required('Поле обов`язкове для заповнення'),
    department: Yup.string().required('Поле обов`язкове для заповнення'),
    comments: Yup.string().max(
      300,
      'Коментар може містити максимум 300 символів'
    ),
    show: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '+380 ',
      city: '',
      department: '',
      comments: '',
      show: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // const handleCityName = () => {
  //   const value = formik.values.name;
  //   dispatch(value);
  // };

  return (
    <div className={s.cartForm}>
      <h4 className={s.cartFormsTitle}>Оформлення замовлення</h4>
      <p className={s.cartFormText}>
        Заповніть контактні дані та адресу доставки
      </p>
      <form className={s.cartformData} onSubmit={formik.handleSubmit}>
        <label
          className={`${s.cartFormLabel} ${formik.touched.name && formik.errors.name ? s.error : ''}`}
        >
          <span className={s.cartFormSpan}>ПІБ</span>
          <input
            name="name"
            placeholder="Приходько Анжеліка Миколаївна"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className={s.cartFormError}>{formik.errors.name}</div>
          )}
        </label>
        <div className={s.cartFormInput2}>
          <label
            className={`${s.cartFormLabel} ${formik.touched.email && formik.errors.email ? s.error : ''}`}
          >
            <span className={s.cartFormSpan}>Електронна пошта</span>
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.name && formik.errors.email && (
              <div className={s.cartFormError}>{formik.errors.email}</div>
            )}
          </label>
          <label
            className={`${s.cartFormLabel} ${formik.touched.phone && formik.errors.phone ? s.error : ''}`}
          >
            <span className={s.cartFormSpan}>Телефон</span>
            <input
              name="phone"
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.touched.name && formik.errors.phone && (
              <div className={s.cartFormError}>{formik.errors.phone}</div>
            )}
          </label>
        </div>
        <label
          className={`${s.cartFormLabel} ${formik.touched.city && formik.errors.city ? s.error : ''}`}
        >
          <span className={s.cartFormSpan}>Місто</span>
          <input
            name="city"
            onChange={(event) => {
              formik.handleChange(event);
              setValue(event.target.value);
            }}
            value={formik.values.city}
          />
          {formik.touched.name && formik.errors.city && (
            <div className={s.cartFormError}>{formik.errors.city}</div>
          )}
        </label>
        <label
          className={`${s.cartFormLabel} ${formik.touched.department && formik.errors.department ? s.error : ''}`}
        >
          <span className={s.cartFormSpan}>Відділення Нової пошти</span>
          <Select
            name="department"
            options={options}
            placeholder={'Обрати відділення...'}
            styles={selectStyles}
            onChange={(newValue) =>
              formik.setFieldValue('department', newValue.label)
            }
          />
          {formik.touched.name && formik.errors.department && (
            <div className={s.cartFormError}>{formik.errors.department}</div>
          )}
        </label>
        <label className={s.cartFormLabel}>
          <span className={s.cartFormSpan}>Коментар</span>
          <div className={s.cartFormTextarea}>
            <textarea
              maxLength={maxLength}
              name="comments"
              rows="5"
              onChange={formik.handleChange}
              value={formik.values.comments}
            />
          </div>
          <div className={s.cartFormTextareaSum}>
            {formik.values.comments.length}/{maxLength}
          </div>
        </label>
        <div className={s.cartFormCustomChekbox}>
          <input
            className={clsx(s.cartFormInputCheckbox, s.visuallyHidden)}
            type="checkbox"
            name="show"
            id="show"
            onChange={() => formik.setFieldValue('show', true)}
          />
          <label htmlFor="show" className={s.checkText}>
            <span className={s.cartFormCheckboxBG}>
              <svg className={s.cartFormSVG}>
                <use href={sprite + `#icon-checkmark1`}></use>
              </svg>
            </span>
            Зберегти цю інформацію для наступного разу
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CartForms;
