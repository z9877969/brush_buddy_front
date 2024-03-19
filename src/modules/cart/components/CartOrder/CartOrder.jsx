import OrderPromoCode from '../OrderPromoCode/OrderPromoCode';
import OrderSummary from '../OrderSummary/OrderSummary';
import s from './CartOrder.module.scss';

const CartOrder = () => {
  return (
    <section className={s.blockRight}>
      <OrderPromoCode />
      <OrderSummary />
    </section>
  );
};
export default CartOrder;
