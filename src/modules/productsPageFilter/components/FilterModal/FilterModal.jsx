import { sprite } from 'shared/icons';
import FiltersForm from '../FiltersForm/FiltersForm';
import s from './FilterModal.module.scss';

export const FilterModal = ({
  setFilter,
  onClose,
  onFormSubmit,
  isOpen,
  filter,
}) => {
  return (
    <div className={`${s.filterModal} ${isOpen ? s.visible : ''}`}>
      <div className={s.modalContent}>
        <div className={s.modalHeader}>
          <h5 className={s.headerText}>Фільтри</h5>
          <button type="button" className={s.closeBtn} onClick={onClose}>
            <svg width={24} className={s.closeIcon}>
              <use href={sprite + '#icon-close-cross'}></use>
            </svg>
          </button>
        </div>
        <FiltersForm
          filterProductsCb={onFormSubmit}
          filter={filter}
          onClose={onClose}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};
