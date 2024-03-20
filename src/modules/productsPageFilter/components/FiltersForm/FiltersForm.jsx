import Select from 'react-select';
import { useFormik } from 'formik';
import clsx from 'clsx';

import { PRODUCT_TYPES } from 'shared/constants/index.js';

import s from './FiltersForm.module.scss';
import {
  ageOptions,
  categoriesOptions,
  brandsOptions,
  sortByOptions,
} from 'modules/productsPageFilter/data/options';
import { Button } from 'shared/components';
import { customStyles } from './customStyles';
import { sprite } from 'shared/icons';
import { useEffect, useRef } from 'react';

const FiltersForm = ({ filterProductsCb, onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.inputRef.readOnly = 'true';
  }, []);

  const initialValues = {
    search: '',
    age: ageOptions[0],
    category: categoriesOptions[0],
    brand: brandsOptions[0],
    sortBy: sortByOptions[0],
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const {
        search,
        age: { value: ageValue },
        category: { value: catValue },
        brand: { value: brandValue },
        sortBy: { sortBy: sortByValue },
      } = values;

      filterProductsCb({
        age: ageValue,
        category: catValue,
        search,
        brand: brandValue,
        sortBy: sortByValue,
      });
    },
  });
  const { values, handleSubmit, handleChange, setFieldValue, resetForm } =
    formik;

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
          <div id="checkboxes" className={s.checkboxes}>
            <label htmlFor={PRODUCT_TYPES.ADULT} className={s.checkboxLabel}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.ADULT}
                name="recommendedFor"
                className={clsx(s.check_input, s.adult)}
              />
              <span className={s.check_box}></span>
              Дорослих
            </label>

            <label htmlFor={PRODUCT_TYPES.CHILD} className={s.checkboxLabel}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.CHILD}
                name="recommendedFor"
                className={clsx(s.check_input, s.child)}
              />
              <span className={s.check_box}></span>
              Дітей
            </label>

            <label htmlFor={PRODUCT_TYPES.ANIMAL} className={s.checkboxLabel}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.ANIMAL}
                name="recommendedFor"
                className={clsx(s.check_input, s.animal)}
              />
              <span className={s.check_box}></span>
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
            value={values.age}
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
            options={categoriesOptions}
            value={values.category}
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
            value={values.brand}
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
            value={values.sortBy}
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
