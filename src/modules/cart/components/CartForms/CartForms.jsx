import { useEffect, useMemo, useRef, useState } from 'react';
import Select from 'react-select';
import { useDebounceValue } from 'usehooks-ts';
import { useDispatch, useSelector } from 'react-redux';
import { clsx } from 'clsx';
import {
  apiGetCity,
  apiGetDepartment,
} from '@redux/novaPoshta/novaPoshtaSlice';
import {
  selectCityData,
  selectPostOffice,
} from '@redux/novaPoshta/selectorsNovaPoshta';
import CityNameItem from '../CityNameItem/CityNameItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getDelliverySelectStyles } from './deliverySelectStyles';
import s from './CartForms.module.scss';
import { sprite } from 'shared/icons';
import { DELIVERY_FORM } from 'shared/constants';
import { useDeliveryForm } from 'context/DeliveryFormProvider';

const CartForms = () => {
  const dispatch = useDispatch();

  const cityData = useSelector(selectCityData);
  const postOffice = useSelector(selectPostOffice);

  const [debouncedValue, setValue] = useDebounceValue('', 300);
  const [open, setOpen] = useState(false);
  const [fullCityName, setFullCityName] = useState('');
  const [isSave, setIsSave] = useState(
    () => JSON.parse(localStorage.getItem('isSaveDeliveryInfo')) ?? false
  );

  const listRef = useRef(null);

  const formik = useDeliveryForm();

  const { values, errors, touched } = formik;

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
    dispatch(
      apiGetDepartment(fullCityName.replace(/^[а-яА-ЯІіїЇєЄ]+\.\s*/, ''))
    );
  }, [dispatch, fullCityName]);

  const listDepartments = useMemo(() => {
    if (postOffice?.length > 0) {
      const options = postOffice.map(({ SiteKey, Description }) => ({
        label: Description,
        value: SiteKey,
      }));
      return options;
    } else {
      return [];
    }
  }, [postOffice]);

  const handleCityName = (cityName, cityID) => {
    formik.setFieldValue('city', cityName);
    setFullCityName(cityID);

    setOpen(false);
    formik.setFieldValue('department', '');
  };

  useEffect(() => {
    if (isSave) {
      localStorage.setItem('delivery', JSON.stringify(values));
    } else {
      localStorage.setItem('delivery', JSON.stringify(null));
    }
    localStorage.setItem('isSaveDeliveryInfo', isSave);
  }, [isSave, values]);

  return (
    <div className={s.cartForm}>
      <h4 className={s.cartFormsTitle}>Оформлення замовлення</h4>
      <p className={s.cartFormText}>
        Заповніть контактні дані та адресу доставки
      </p>
      <div className={s.cartformData}>
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
              onChange={(event) => {
                formik.handleChange(event);
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
            options={listDepartments}
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
              name="comments"
              rows="5"
              onChange={formik.handleChange}
              value={values.comments}
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
            name="isSave"
            id="show"
            checked={isSave}
            onChange={() => setIsSave((p) => !p)}
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
      </div>
    </div>
  );
};

export default CartForms;
