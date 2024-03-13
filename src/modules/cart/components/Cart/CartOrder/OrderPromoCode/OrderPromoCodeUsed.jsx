import s from './OrderPromoCodeUsed.module.scss';

const OrderPromoCodeUsed = ({ onClick }) => {
  const price = 52;
  return (
    <div className={s.boxUsedPromo}>
      <div>
        <p className={s.boxInfo}>Ваш промокод застосовано</p>
        <p className={s.infoPrice}>
          Знижка <span className={s.infoPriceFigure}>{price} грн</span>
        </p>
      </div>
      <button type="button" className={s.deactivatedPromoBtn} onClick={onClick}>
        Скасувати
      </button>
    </div>
  );
};
export default OrderPromoCodeUsed;
