import { useSelector } from 'react-redux';
import s from './OrderPromoCodeUsed.module.scss';
import { selectDiscount } from '@redux/cart/selectorsCart';

const OrderPromoCodeUsed = ({ onClick }) => {
  const priceDisc = useSelector(selectDiscount);
  return (
    <div className={s.boxUsedPromo}>
      <div>
        <p className={s.boxInfo}>Ваш промокод застосовано</p>
        <p className={s.infoPrice}>
          Знижка <span className={s.infoPriceFigure}>{priceDisc} грн</span>
        </p>
      </div>
      <button type="button" className={s.deactivatedPromoBtn} onClick={onClick}>
        Скасувати
      </button>
    </div>
  );
};
export default OrderPromoCodeUsed;
