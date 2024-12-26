import { useEffect } from 'react';
import { useMedia } from 'hooks/useMedia';
import clsx from 'clsx';
import FiltersForm from '../FiltersForm/FiltersForm';
import { sprite } from 'shared/icons';
import s from './FilterModal.module.scss';

export const FilterModal = ({
  setFilter,
  resetFilters,
  onClose,
  isOpen,
  filter,
}) => {
  const { isDesktop } = useMedia();

  const handleModalClose = (e) => {
    if (isDesktop) return;
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isDesktop) {
      isOpen
        ? (document.body.style.overflow = 'hidden')
        : document.body.removeAttribute('style');
    }
  }, [isDesktop, isOpen]);

  return (
    <div
      className={clsx(s.filterModal, isOpen && s.visible)}
      onClick={handleModalClose}
    >
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
          filter={filter}
          onClose={onClose}
          setFilter={setFilter}
          resetFilters={resetFilters}
        />
      </div>
    </div>
  );
};
