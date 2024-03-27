import OrderPromoCode from '../OrderPromoCode/OrderPromoCode';
import OrderSummary from '../OrderSummary/OrderSummary';
import s from './CartOrder.module.scss';

const CartOrder = ({ canSubmit, validateForm }) => {
  return (
    <section className={s.blockRight}>
      <OrderPromoCode />
      <OrderSummary canSubmit={canSubmit} validateForm={validateForm} />
    </section>
  );
};
export default CartOrder;
