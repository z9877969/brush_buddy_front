import { useState } from 'react';
import { Button } from 'shared/components';
import { sprite } from 'shared/icons';
// import FiltersForm from '../FiltersForm/FiltersForm';
import s from './ProductsPageFilter.module.scss';
import { FilterModal } from '../FilterModal/FilterModal';

const ProductsPageFilter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onFormSubmit = () => {};

  return (
    <aside className={s.aside}>
      <Button
        className={s.filterOpenBtn}
        title={
          <>
            <p className={s.openBtnText}>Фільтри та сортування</p>
            <svg width={20} className={s.openBtnIcon}>
              <use href={sprite + '#icon-filter'}></use>
            </svg>
          </>
        }
        border
        onClick={toggleModal}
      />
      <FilterModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onFormSubmit={onFormSubmit}
      />
    </aside>
  );
};

export default ProductsPageFilter;
