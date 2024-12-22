import Select from 'react-select';
import { useFormik } from 'formik';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { Button } from 'shared/components';
import { PRODUCT_TYPES } from 'shared/constants';
import CustomOption from '../CustomOption/CustomOption';
import {
  ageOptions,
  categoriesOptions,
  brandsOptions,
  sortByOptions,
} from '../../data/options';
import { sprite } from 'shared/icons';
import { setCustomStyles } from './customStyles';
import s from './FiltersForm.module.scss';

const FiltersForm = ({ setFilter, resetFilters, onClose, filter }) => {
  const ageRef = useRef(null);
  const categoryRef = useRef(null);
  const brandRef = useRef(null);
  const sortByRef = useRef(null);

  const products = useSelector((s) => s.products.list);

  const productsByCategory = useMemo(() => {
    const data = {};

    products.forEach((product) => {
      if (data[product.category.value]) {
        data[product.category.value]++;
      } else {
        data[product.category.value] = 1;
      }
    });
    return data;
  }, [products]);

  const formik = useFormik({
    initialValues: filter,
    onSubmit: (values) => {
      setFilter(values);
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
    setFilter(values);
  }, [setFilter, values]);

  useEffect(() => {
    if (
      !Object.entries(filter)
        .filter(([key]) => {
          key !== 'sortBy';
        })
        // eslint-disable-next-line no-unused-vars
        .some(([_, data]) => data.length > 0)
    ) {
      setValues(filter);
    }
  }, [filter, setValues]);

  const selectOptionDecorator = useCallback(
    (filterType) => (selectedOption) => {
      const alreadySelected = values[filterType].find(
        (opt) => opt.value === selectedOption.value
      );
      if (alreadySelected) {
        setValues((prev) => ({
          ...prev,
          [filterType]: prev[filterType].filter(
            (opt) => opt.value !== selectedOption.value
          ),
        }));
      } else {
        setValues((prev) => ({
          ...prev,
          [filterType]: [...prev[filterType], selectedOption],
        }));
      }
    },
    [setValues, values]
  );

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
            styles={setCustomStyles({ open: true })}
            ref={ageRef}
            isDisabled={!values.recommendedFor.includes(PRODUCT_TYPES.CHILD)}
            menuIsOpen
            components={{
              Option: (pros) => (
                <CustomOption
                  {...pros}
                  selectOptionDecorator={selectOptionDecorator}
                  filterType="age"
                  disabled={
                    !values.recommendedFor.includes(PRODUCT_TYPES.CHILD)
                  }
                />
              ),
            }}
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
            styles={setCustomStyles({ open: true })}
            ref={categoryRef}
            menuIsOpen={true}
            components={{
              Option: (pros) => (
                <CustomOption
                  {...pros}
                  selectOptionDecorator={selectOptionDecorator}
                  filterType="category"
                />
              ),
            }}
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
            styles={setCustomStyles({ open: true })}
            ref={brandRef}
            menuIsOpen={true}
            components={{
              Option: (pros) => (
                <CustomOption
                  {...pros}
                  selectOptionDecorator={selectOptionDecorator}
                  filterType="brand"
                />
              ),
            }}
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
            styles={setCustomStyles()}
            ref={sortByRef}
          />
        </div>
      </div>
      <div className={s.bottom}>
        <Button
          className={s.resetBtn}
          title={'Скинути усі фільтри'}
          border
          onClick={resetFilters}
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

const MemoizedFiltersForm = memo(FiltersForm);
export default MemoizedFiltersForm;
