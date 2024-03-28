import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    // .min(5, 'Введіть повністю ПІБ')
    .matches(
      /^[a-яА-ЯєЄїЇьЬҐґйЙіІ]{2,18}[\s]{1,2}[a-яА-ЯєЄїЇьЬҐґйЙіІ]{2,18}[\s]{1,2}[a-яА-ЯєЄїЇьЬҐґйЙіІ]{6,24}$/,
      'Введіть повністю ПІБ через пробіл'
    )
    .max(64, 'Занадто довге ПІБ')
    .required('Поле обов`язкове для заповнення'),
  email: Yup.string()
    .email('Введіть дійсну адресу ел. пошти')
    .required('Поле обов`язкове для заповнення'),
  phone: Yup.string()
    .matches(/^\+?3?8?(0\d{9})$/, 'Введіть коректний номер телефону')
    .required('Поле обов`язкове для заповнення'),
  city: Yup.string().required('Поле обов`язкове для заповнення'),
  department: Yup.object().required('Поле обов`язкове для заповнення'),
  comments: Yup.string().max(
    300,
    'Коментар може містити максимум 300 символів'
  ),
  show: Yup.boolean(),
});
