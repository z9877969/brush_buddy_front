// import { PRODUCT_TYPES } from 'shared/constants';
// import { useState } from 'react';
import Select from 'react-select';
import { ResetFilterBtn } from '../ResetFilterBtn/ResetFilterBtn';
import { PRODUCT_TYPES } from 'shared/constants/index.js';

import s from './FiltersForm.module.scss';
import {
  ageOptions,
  categoriesOptions,
} from 'modules/productsPageFilter/data/options';
import { useState } from 'react';

const FiltersForm = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className={s.container}>
      <form type="submit">
        <div>
          <label htmlFor="search">Пошук</label>
          <input type="text" id="search" />
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
            placeholder={ageOptions[3].label}
            options={ageOptions}
            defaultValue={selectedAge}
            onChange={setSelectedAge}
          />
        </div>

        <div>
          <label htmlFor="category">Категорії</label>
          <Select
            id="category"
            placeholder={'Зубні щітки'}
            options={categoriesOptions}
            defaultValue={selectedCategory}
            onChange={setSelectedCategory}
          />
        </div>

        <div>
          <label htmlFor="brand">Бренд</label>
          <select id="brand">
            <option value="tello">TELLO</option>
            <option value="miradent">Miradent</option>
          </select>
        </div>

        <div>
          <label htmlFor="sortBy">Сортувати</label>
          <select id="sortBy">
            <option value="new">Новинки</option>
            <option value="actions">Акції</option>
            <option value="increment">Ціна за зростанням</option>
            <option value="decrement">Ціна за спаданням</option>
          </select>
        </div>

        <ResetFilterBtn />
        <button type="button">Перейти</button>
      </form>
    </div>
  );
};

export default FiltersForm;
