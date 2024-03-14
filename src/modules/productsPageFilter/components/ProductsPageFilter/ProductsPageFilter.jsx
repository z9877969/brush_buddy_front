import { useState } from 'react';
import { Button } from 'shared/components';
import { sprite } from 'shared/icons';
import FiltersForm from '../FiltersForm/FiltersForm';
import s from './ProductsPageFilter.module.scss';

const ProductsPageFilter = () => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  const onFormSubmit = () => {};

  return (
    <aside className={s.aside}>
      <Button
        className={s.filterOpenBtn}
        title={
          <>
            <p>Фільтри та сортування</p>
            <svg width={15}>
              <use href={sprite + '#icon-filter'}></use>
            </svg>
          </>
        }
        border
        onClick={toggleFilters}
      />
      <div className={`${s.filterWindow} ${showFilters ? s.visible : ''}`}>
        <div>
          <h3>Фільтри</h3>
          <button type="button" className={s.closeBtn} onClick={toggleFilters}>
            <svg width={15}>
              <use href={sprite + '#icon-close-cross'}></use>
            </svg>
          </button>
        </div>
        <FiltersForm filterProductsCb={onFormSubmit} />
      </div>
    </aside>
  );
};

export default ProductsPageFilter;
