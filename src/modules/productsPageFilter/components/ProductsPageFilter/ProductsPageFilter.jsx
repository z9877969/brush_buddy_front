import { useState } from 'react';
import { Button } from 'shared/components';
import { sprite } from 'shared/icons';
import { FilterModal } from '../FilterModal/FilterModal';

import s from './ProductsPageFilter.module.scss';

const ProductsPageFilter = ({ onFormSubmit, filter, setFilter }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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
        filter={filter}
        setFilter={setFilter}
      />
    </aside>
  );
};

export default ProductsPageFilter;
