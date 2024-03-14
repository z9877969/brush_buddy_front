import Select from 'react-select';
import { useFormik } from 'formik';

import { PRODUCT_TYPES } from 'shared/constants/index.js';

import s from './FiltersForm.module.scss';
import {
  ageOptions,
  categoriesOptions,
  brandsOptions,
  sortByOptions,
} from 'modules/productsPageFilter/data/options';
import { Button } from 'shared/components';

const FiltersForm = ({ filterProductsCb }) => {
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
      // console.log('run some function to filter products', ` ${values}`);
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
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">Пошук</label>
          <input
            type="text"
            id="search"
            name="search"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div>
          <label htmlFor="checkboxes">Рекомендовано для</label>
          <div id="checkboxes">
            <label htmlFor={PRODUCT_TYPES.ADULT}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.ADULT}
                name="recommendedFor"
              />{' '}
              Дорослих
            </label>
            <label htmlFor={PRODUCT_TYPES.CHILD}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.CHILD}
                name="recommendedFor"
              />{' '}
              Дітей
            </label>
            <label htmlFor={PRODUCT_TYPES.ANIMAL}>
              <input
                type="checkbox"
                id={PRODUCT_TYPES.ANIMAL}
                name="recommendedFor"
              />{' '}
              Тварин
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="age">Вік дитини</label>
          <Select
            id="age"
            options={ageOptions}
            value={values.age}
            onChange={(option) => {
              setFieldValue('age', option);
            }}
          />
        </div>

        <div>
          <label htmlFor="category">Категорії</label>
          <Select
            id="category"
            options={categoriesOptions}
            value={values.category}
            onChange={(option) => {
              setFieldValue('category', option);
            }}
          />
        </div>

        <div>
          <label htmlFor="brand">Бренд</label>
          <Select
            id="brand"
            options={brandsOptions}
            value={values.brand}
            onChange={(option) => {
              setFieldValue('brand', option);
            }}
          />
        </div>

        <div>
          <label htmlFor="sortBy">Сортувати</label>
          <Select
            id="sortBy"
            options={sortByOptions}
            value={values.sortBy}
            onChange={(option) => {
              setFieldValue('sortBy', option);
            }}
          />
        </div>

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
        />
      </form>
    </div>
  );
};

export default FiltersForm;
