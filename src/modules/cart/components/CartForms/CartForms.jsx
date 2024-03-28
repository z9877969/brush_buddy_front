import { useEffect, useRef, useState } from 'react';
import Select from 'react-select';
import { useDebounceValue } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { clsx } from 'clsx';
import {
  apiGetCity,
  apiGetDepartment,
} from '@redux/novaPoshta/novaPoshtaSlice';
import {
  selectCityData,
  selectPostOffice,
} from '@redux/novaPoshta/selectorsNovaPoshta';
import {
  addDeliveryInfo,
  // addSaveInfo,
  changeButtonSave,
} from '@redux/deliveryInfo/deliveryInfoSlice';
import CityNameItem from '../CityNameItem/CityNameItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { signupSchema } from '../../data/deliveryFormSchema';
import { getDelliverySelectStyles } from './deliverySelectStyles';
import s from './CartForms.module.scss';
import { sprite } from 'shared/icons';
import { DELIVERY_FORM } from 'shared/constants';

const CartForms = ({ mustValidate, setCanSubmit }) => {
  const dispatch = useDispatch();

  const cityData = useSelector(selectCityData);
  const postOffice = useSelector(selectPostOffice);

  const [debouncedValue, setValue] = useDebounceValue('', 500);
  const [open, setOpen] = useState(false);
  const [fullCityName, setFullCityName] = useState('');
  const [isShow, setIsShow] = useState(false);

  const listRef = useRef(null);
  const isFirstRenderRef = useRef(true);

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
      phone: '+380',
      city: '',
      department: '',
      comments: '',
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      const { name, email, phone, city, department, comments } = values;
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
      // dispatch(addSaveInfo(values));
    },
  });

  const { values, errors, touched } = formik;

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

  useEffect(() => {
    if (mustValidate) {
      formik.validateForm();
      const touchedFields = Object.keys(formik.values).reduce((acc, el) => {
        acc[el] = true;
        return acc;
      }, {});
      formik.setTouched(touchedFields);
    }
    // eslint-disable-next-line
  }, [mustValidate]);

  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    setCanSubmit(formik.isValid);
    if (formik.isValid) {
      dispatch(
        addDeliveryInfo({
          ...values,
          department: values.department.label,
        })
      );
    }
  }, [formik.isValid, values, setCanSubmit, dispatch]);

  useEffect(() => {
    formik.setFieldValue('city', debouncedValue);
    // eslint-disable-next-line
  }, [debouncedValue]);

  return (
    <div className={s.cartForm}>
      <h4 className={s.cartFormsTitle}>Оформлення замовлення</h4>
      <p className={s.cartFormText}>
        Заповніть контактні дані та адресу доставки
      </p>
      <form className={s.cartformData} onSubmit={formik.handleSubmit}>
        <label className={s.cartFormLabel}>
          <span className={s.cartFormSpan}>ПІБ</span>
          <input
            className={clsx(
              s.input,
              errors.name && touched.name && s.inputError
            )}
            name="name"
            value={values.name}
            placeholder="Приходько Анжеліка Миколаївна"
            // onBlur={() => handleDeliveryData('name')}
            onChange={formik.handleChange}
          />
          <ErrorMessage errorMessage={errors.name} touched={touched.name} />
        </label>
        <div className={s.cartFormInput2}>
          <label className={s.cartFormLabel}>
            <span className={s.cartFormSpan}>Електронна пошта</span>
            <input
              className={clsx(
                s.input,
                errors.email && touched.email && s.inputError
              )}
              name="email"
              value={values.email}
              // onBlur={() => handleDeliveryData('email')}
              onChange={formik.handleChange}
            />
            <ErrorMessage errorMessage={errors.email} touched={touched.email} />
          </label>
          <label className={s.cartFormLabel}>
            <span className={s.cartFormSpan}>Телефон</span>
            <input
              className={clsx(
                s.input,
                errors.phone && touched.phone && s.inputError
              )}
              name="phone"
              value={values.phone}
              onBlur={handleDeliveryData}
              onChange={formik.handleChange}
            />
            <ErrorMessage errorMessage={errors.phone} touched={touched.phone} />
          </label>
        </div>
        <div className={s.cityWrapper}>
          {open && cityData.length > 0 && (
            <CityNameItem handleCityName={handleCityName} />
          )}
          <label className={s.cartFormLabel}>
            <span className={s.cartFormSpan}>Місто</span>
            <input
              ref={listRef}
              className={clsx(
                s.input,
                errors.city && touched.city && s.inputError
              )}
              name="city"
              value={formik.values.city}
              // onBlur={handleDeliveryData}
              onChange={(event) => {
                // formik.handleChange(event);
                setValue(event.target.value);
              }}
              onClick={() => {
                setOpen(true);
              }}
            />
            <ErrorMessage errorMessage={errors.city} touched={touched.city} />
          </label>
        </div>
        <label className={s.cartFormLabel}>
          <span className={s.cartFormSpan}>Відділення Нової пошти</span>
          <Select
            name="department"
            // onBlur={() => {
            //   handleDeliveryData();
            // }}
            options={setListDepartments()}
            placeholder={'Обрати відділення...'}
            styles={getDelliverySelectStyles({
              isError: Boolean(errors.department && touched.department),
            })}
            onChange={(newValue) =>
              formik.setFieldValue('department', newValue)
            }
            value={values.department}
          />
          <ErrorMessage
            errorMessage={errors.department}
            touched={touched.department}
          />
        </label>
        <label className={s.cartFormLabel}>
          <span className={s.cartFormSpan}>Коментар</span>
          <div className={s.cartFormTextarea}>
            <textarea
              maxLength={DELIVERY_FORM.COMMENT_MAX_LENGTH}
              onBlur={handleDeliveryData}
              name="comments"
              rows="5"
              onChange={formik.handleChange}
              value={formik.values.comments}
            />
          </div>
          <div className={s.cartFormTextareaSum}>
            {formik.values.comments.length}/{DELIVERY_FORM.COMMENT_MAX_LENGTH}
          </div>
        </label>
        <div className={s.cartFormCustomChekbox}>
          <input
            className={clsx(s.cartFormInputCheckbox, s.visuallyHidden)}
            type="checkbox"
            name="isShow"
            id="show"
            onChange={() => setIsShow((p) => !p)}
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
