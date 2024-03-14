import s from './DiscountReminder.module.scss';
import { sprite } from 'shared/icons';

const DiscountReminder = ({ handleClose }) => {
  const handleClickClose = () => {
    handleClose();
  };

  return (
    <div className={s.discountWrapper}>
      <p className={s.discountText}>
        Знижка -10% на перше замовлення
        <a className={s.discountLink} href="#footer">
          тут
        </a>
      </p>
      <button className={s.btnClose} onClick={handleClickClose}>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-close-cross`}></use>
        </svg>
      </button>
    </div>
  );
};

export default DiscountReminder;
