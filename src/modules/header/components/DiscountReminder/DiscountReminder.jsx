import { useState } from 'react';
import { Discount } from 'modules/footer';
import Modal from 'shared/components/Modal/Modal';
import { sprite } from 'shared/icons';
import s from './DiscountReminder.module.scss';

const DiscountReminder = ({ handleClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickClose = () => {
    handleClose();
  };

  return (
    <div className={s.discountWrapper}>
      <p
        className={s.discountText}
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        Знижка -10% на перше замовлення
        <span className={s.discountLink}>тут</span>
      </p>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Discount />
        </Modal>
      )}
      <button className={s.btnClose} onClick={handleClickClose}>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-close-cross`}></use>
        </svg>
      </button>
    </div>
  );
};

export default DiscountReminder;
