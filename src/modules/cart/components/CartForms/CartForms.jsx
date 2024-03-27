import Select from 'react-select';
import { selectStyles } from './SelectStyles';
import { useDebounceValue } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import {
  apiGetCity,
  apiGetDepartment,
} from '@redux/novaPoshta/novaPoshtaSlice';
import {
  selectCityData,
  selectPostOffice,
} from '@redux/novaPoshta/selectorsNovaPoshta';
import CityNameItem from './CityNameItem';
import { SignupSchema } from './SignupSchemaYup';

import { useFormik } from 'formik';

import { sprite } from 'shared/icons';

import { clsx } from 'clsx';

import s from './CartForms.module.scss';
import {
  addDeliveryInfo,
  addSaveInfo,
  changeButtonSave,
} from '@redux/deliveryInfo/deliveryInfoSlice';
// import {
//   selectButtonSave,
//   selectSaveInfo,
// } from '@redux/deliveryInfo/selectorsDeliveryInfo';

const CartForms = ({ isValidating, setCanSubmit }) => {
  const dispatch = useDispatch();
  const [debouncedValue, setValue] = useDebounceValue('', 500);
  const [open, setOpen] = useState(false);
  const [fullCityName, setFullCityName] = useState('');
  const listRef = useRef();

  const cityData = useSelector(selectCityData);
  const postOffice = useSelector(selectPostOffice);
  // const buttonSave = useSelector(selectButtonSave);
  // const saveInfo = useSelector(selectSaveInfo);

  const maxLength = 300;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!listRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!debouncedValue) return;
    dispatch(apiGetCity(debouncedValue));
  }, [dispatch, debouncedValue]);

  useEffect(() => {
    if (!fullCityName) return;
    dispatch(apiGetDepartment(fullCityName.substring(3)));
  }, [dispatch, fullCityName]);

  const setListDepartments = () => {
    if (postOffice?.length > 0) {
      const options = postOffice.map(({ SiteKey, Description }) => ({
        label: Description,
        value: SiteKey,
      }));
      return options;
    } else {
      return;
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '+380 ',
      city: '',
      department: '',
      comments: '',
      isShow: false,
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      const { name, email, phone, city, department, comments, isShow } = values;
      const departmentLabel = department.label;
      const deliveryInfo = {
        name,
        email,
        phone,
        comments,
        city,
        departmentLabel,
      };
      dispatch(addDeliveryInfo(deliveryInfo));
      dispatch(changeButtonSave(isShow));
      dispatch(addSaveInfo(values));
    },
  });

  const { validateForm } = formik;

  const handleDeliveryData = (name = '') => {
    name && formik.validateField(name);
    dispatch(
      addDeliveryInfo({
        ...formik.values,
        department: formik.values.department.label,
      })
    );
  };
  // useEffect(() => {
  //   if (buttonSave) {
  //     const { name, email, phone, city, department, comments, show } = saveInfo;
  //     formik.setFieldValue('name', name);
  //   }
  //   return;
  // });

  // useEffect(() => {
  //   if (isSubmitForm) {
  //     formik.submitForm();
  //   }
  // }, [isSubmitForm, dispatch, formik]);

  const handleCityName = (cityName) => {
    formik.setFieldValue('city', cityName);
    setFullCityName(cityName);
    setOpen(false);
    formik.setFieldValue('department', '');
  };

  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    isValidating && formik.validateForm();
    // eslint-disable-next-line
  }, [isValidating]);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    setCanSubmit(formik.isValid);
  }, [formik.isValid, setCanSubmit]);

  useEffect(() => {
    formik.setFieldValue('city', debouncedValue);
    // eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <div className={s.cartForm}>
      <h4 className={s.cartFormsTitle}>Оформлення замовлення</h4>
      <p className={s.cartFormText} onClick={() => validateForm(formik.values)}>
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
            onBlur={() => handleDeliveryData('name')}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && (
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
              onBlur={() => handleDeliveryData('email')}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <div className={s.cartFormError}>{formik.errors.email}</div>
            )}
          </label>
          <label
            className={`${s.cartFormLabel} ${formik.touched.phone && formik.errors.phone ? s.error : ''}`}
          >
            <span className={s.cartFormSpan}>Телефон</span>
            <input
              name="phone"
              onBlur={handleDeliveryData}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone && (
              <div className={s.cartFormError}>{formik.errors.phone}</div>
            )}
          </label>
        </div>
        <div className={s.cityWrapper}>
          {open && cityData.length > 0 && (
            <CityNameItem handleCityName={handleCityName} />
          )}
          <label
            className={`${s.cartFormLabel} ${formik.touched.city && formik.errors.city ? s.error : ''}`}
          >
            <span className={s.cartFormSpan}>Місто</span>
            <input
              onClick={() => {
                setOpen(true);
              }}
              ref={listRef}
              name="city"
              onBlur={handleDeliveryData}
              onChange={(event) => {
                // formik.handleChange(event);
                setValue(event.target.value);
              }}
              value={formik.values.city}
            />
            {formik.errors.city && (
              <div className={s.cartFormError}>{formik.errors.city}</div>
            )}
          </label>
        </div>
        <label
          className={`${s.cartFormLabel} ${formik.touched.department && formik.errors.department ? s.error : ''}`}
        >
          <span className={s.cartFormSpan}>Відділення Нової пошти</span>
          <Select
            name="department"
            onBlur={handleDeliveryData}
            options={setListDepartments()}
            placeholder={'Обрати відділення...'}
            styles={selectStyles}
            onChange={(newValue) =>
              formik.setFieldValue('department', newValue)
            }
            value={formik.values.department}
          />
          {formik.errors.department && (
            <div className={s.cartFormError}>{formik.errors.department}</div>
          )}
        </label>
        <label className={s.cartFormLabel}>
          <span className={s.cartFormSpan}>Коментар</span>
          <div className={s.cartFormTextarea}>
            <textarea
              maxLength={maxLength}
              onBlur={handleDeliveryData}
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
            name="isShow"
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
      </form>
    </div>
  );
};

export default CartForms;
