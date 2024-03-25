import s from './CartPaymentMethods.module.scss';

const CartPaymentMethods = () => {
  return (
    <div>
      <h4 className={s.cartPaymentsTitle}>Спосіб оплати</h4>
      <form action="" className={s.listPayments}>
        <label>
          <input type="radio" name="payment" value="Visa/MasterCard" />
          <span>Карткою Visa/MasterCard</span>
        </label>
        <label>
          <input type="radio" name="payment" value="Оплата при отриманні" />
          <span>Оплата при отриманні</span>
        </label>
      </form>
    </div>
  );
};

export default CartPaymentMethods;
