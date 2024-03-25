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

const FiltersForm = ({ filterProductsCb, onClose, filter }) => {
  const ref = useRef(null);

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
    : {
        search: '',
        recommendedFor: [],
        age: ageOptions[0],
        category: categoriesOptions(productsByCategory)[0],
        brand: brandsOptions[0],
        sortBy: sortByOptions[0],
      };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      filterProductsCb(values);
    },
  });
  const { values, handleSubmit, handleChange, setFieldValue, resetForm } =
    formik;

  useEffect(() => {
    ref.current.inputRef.readOnly = 'true';
  }, []);

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
            ref={ref}
            id="age"
            options={ageOptions}
            value={values.age ? values.age : ageOptions[0]}
            onChange={(option) => {
              setFieldValue('age', option);
            }}
            styles={customStyles}
          />
        </div>

        <div className={s.inputContainer}>
          <label htmlFor="category" className={s.label}>
            Категорії
          </label>
          <Select
            id="category"
            options={categoriesOptions(productsByCategory)}
            value={
              values.category
                ? values.category
                : categoriesOptions(productsByCategory)[0]
            }
            onChange={(option) => {
              setFieldValue('category', option);
            }}
            styles={customStyles}
            ref={ref}
          />
        </div>

        <div className={s.inputContainer}>
          <label htmlFor="brand" className={s.label}>
            Бренд
          </label>
          <Select
            id="brand"
            options={brandsOptions}
            value={values.brand ? values.brand : brandsOptions[0]}
            onChange={(option) => {
              setFieldValue('brand', option);
            }}
            styles={customStyles}
            ref={ref}
          />
        </div>

        <div className={s.inputContainer}>
          <label htmlFor="sortBy" className={s.label}>
            Сортувати
          </label>
          <Select
            id="sortBy"
            options={sortByOptions}
            value={values.sortBy ? values.sortBy : sortByOptions[0]}
            onChange={(option) => {
              setFieldValue('sortBy', option);
            }}
            styles={customStyles}
            ref={ref}
          />
        </div>
      </div>
      <div className={s.bottom}>
        <Button
          className={s.resetBtn}
          title={'Скинути усі фільтри'}
          border
          onClick={resetForm}
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
