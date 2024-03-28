import s from './CartPaymentMethods.module.scss';

const CartPaymentMethods = () => {
  return (
    <div>
      <h4 className={s.cartPaymentsTitle}>Спосіб оплати</h4>
      <form action="" className={s.listPayments}>
        <div>
          <input
            type="radio"
            name="payment"
            value="Visa/MasterCard"
            id="online"
          />
          <label htmlFor="online">
            <span className={s.listPaymentsOnline}></span>
            <span className={s.listPaymentsTitleText}>
              Карткою Visa/MasterCard
            </span>
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="payment"
            id="receipt"
            value="Оплата при отриманні"
          />
          <label htmlFor="receipt">
            <span className={s.listPaymentsTitleText}>
              Оплата при отриманні
            </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default CartPaymentMethods;
