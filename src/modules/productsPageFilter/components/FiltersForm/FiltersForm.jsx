import Select from 'react-select';
import { useFormik } from 'formik';
import { useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { PRODUCT_TYPES } from 'shared/constants/index.js';
import {
  ageOptions,
  categoriesOptions,
  brandsOptions,
  sortByOptions,
} from '../../data/options';
import { Button } from 'shared/components';
import { customStyles } from './customStyles.js';
import { sprite } from 'shared/icons';

import s from './FiltersForm.module.scss';
import { initialFilterValues } from 'modules/productsPageFilter/data/initialFilterValues';

const FiltersForm = ({ setFilter, filterProductsCb, onClose, filter }) => {
  const ageRef = useRef(null);
  const categoryRef = useRef(null);
  const brandRef = useRef(null);
  const sortByRef = useRef(null);

  const products = useSelector((s) => s.products.list);

  const productsByCategory = useMemo(() => {
    const data = {};

    products.forEach((product) => {
      if (data[product.category]) {
        data[product.category]++;
      } else {
        data[product.category] = 1;
      }
    });
    return data;
  }, [products]);

  const initialValues = filter
    ? {
        search: filter.search,
        recommendedFor: filter.recommendedFor,
        age: filter.age,
        category: filter.category,
        brand: filter.brand,
        sortBy: filter.sortBy,
      }
    : initialFilterValues;

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      filterProductsCb(values);
    },
  });
  const {
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    // resetForm,
    setValues,
  } = formik;

  useEffect(() => {
    ageRef.current.inputRef.readOnly = true;
    categoryRef.current.inputRef.readOnly = true;
    brandRef.current.inputRef.readOnly = true;
    sortByRef.current.inputRef.readOnly = true;
  }, []);

  useEffect(() => {
    filterProductsCb(values);
    // eslint-disable-next-line
  }, [filterProductsCb]);

  useEffect(() => {
    setValues(filter);
  }, [filter, setValues]);

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.inputs}>
        <div className={s.inputContainer}>
          <label htmlFor="search" className={s.label}>
            Пошук
          </label>
          <div className={s.searchInput}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Знайти товар"
              onChange={(e) => handleChange(e)}
              className={s.input}
              value={values.search}
            />
            <svg width={20} className={s.searchIcon}>
              <use href={sprite + '#icon-search'}></use>
            </svg>
          </div>
        </div>

        <div className={s.inputContainer}>
          <label htmlFor="checkboxes" className={s.label}>
            Рекомендовано для
          </label>
          <div id="checkboxes" className={s.checkboxes} role="group">
            <label htmlFor={PRODUCT_TYPES.ADULT} className={s.checkboxLabel}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.ADULT}
                name="recommendedFor"
                value={PRODUCT_TYPES.ADULT}
                className={clsx(s.check_input, s.adult)}
                onChange={(e) => handleChange(e)}
                checked={values.recommendedFor.includes(PRODUCT_TYPES.ADULT)}
              />
              <span className={s.check_box}>
                <svg className={s.checkIcon}>
                  <use href={sprite + `#icon-checkmark1`}></use>
                </svg>
              </span>
              Дорослих
            </label>

            <label htmlFor={PRODUCT_TYPES.CHILD} className={s.checkboxLabel}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.CHILD}
                value={PRODUCT_TYPES.CHILD}
                name="recommendedFor"
                className={clsx(s.check_input, s.child)}
                onChange={(e) => handleChange(e)}
                checked={values.recommendedFor.includes(PRODUCT_TYPES.CHILD)}
              />
              <span className={s.check_box}>
                <svg className={s.checkIcon}>
                  <use href={sprite + `#icon-checkmark1`}></use>
                </svg>
              </span>
              Дітей
            </label>

            <label htmlFor={PRODUCT_TYPES.ANIMAL} className={s.checkboxLabel}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.ANIMAL}
                value={PRODUCT_TYPES.ANIMAL}
                name="recommendedFor"
                className={clsx(s.check_input, s.animal)}
                onChange={(e) => handleChange(e)}
                checked={values.recommendedFor.includes(PRODUCT_TYPES.ANIMAL)}
              />
              <span className={s.check_box}>
                <svg className={s.checkIcon}>
                  <use href={sprite + `#icon-checkmark1`}></use>
                </svg>
              </span>
              Тварин
            </label>
          </div>
        </div>
        <div className={s.inputContainer}>
          <label htmlFor="age" className={s.label}>
            Вік дитини
          </label>
          <Select
            id="age"
            options={ageOptions}
            placeholder={'Усі'}
            value={values.age}
            defaultValue={null}
            onChange={(option) => {
              setFieldValue('age', option);
              ageRef.current.blur();
            }}
            styles={customStyles}
            ref={ageRef}
            isDisabled={!values.recommendedFor.includes(PRODUCT_TYPES.CHILD)}
          />
        </div>

        <div className={s.inputContainer}>
          <label htmlFor="category" className={s.label}>
            Категорії
          </label>
          <Select
            id="category"
            options={categoriesOptions(productsByCategory)}
            placeholder={'Усі'}
            value={values.category}
            onChange={(option) => {
              setFieldValue('category', option);
              categoryRef.current.blur();
            }}
            styles={customStyles}
            ref={categoryRef}
          />
        </div>

        <div className={s.inputContainer}>
          <label htmlFor="brand" className={s.label}>
            Бренд
          </label>
          <Select
            id="brand"
            options={brandsOptions}
            value={values.brand}
            placeholder={'Усі'}
            onChange={(option) => {
              setFieldValue('brand', option);
              brandRef.current.blur();
            }}
            styles={customStyles}
            ref={brandRef}
          />
        </div>

        <div className={s.inputContainer}>
          <label htmlFor="sortBy" className={s.label}>
            Сортувати
          </label>
          <Select
            id="sortBy"
            options={sortByOptions}
            value={values.sortBy}
            placeholder={'Товари'}
            onChange={(option) => {
              setFieldValue('sortBy', option);
              sortByRef.current.blur();
            }}
            styles={customStyles}
            ref={sortByRef}
          />
        </div>
      </div>
      <div className={s.bottom}>
        <Button
          className={s.resetBtn}
          title={'Скинути усі фільтри'}
          border
          onClick={() => setFilter(initialFilterValues)}
        />
        <Button
          type="submit"
          className={s.submitBtn}
          title={'Показати усі пропозиції'}
          border
          onClick={onClose}
        />
      </div>
    </form>
  );
};

export default FiltersForm;
