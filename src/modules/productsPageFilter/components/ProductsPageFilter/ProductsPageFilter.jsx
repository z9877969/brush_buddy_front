import { Button } from 'shared/components';
import s from './ProductsPageFilter.module.scss';
import { sprite } from 'shared/icons';
import FiltersForm from '../FiltersForm/FiltersForm';

const ProductsPageFilter = () => {
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
      ></Button>
      <div className={s.filterWindow}>
        <div>
          <h3>Фільтри</h3>
          <button type="button">
            <svg width={15}>
              <use href={sprite + '#icon-close-cross'}></use>
            </svg>
          </button>
        </div>
        <FiltersForm onSubmit={onFormSubmit} />
      </div>
    </aside>
  );
};

export default ProductsPageFilter;
