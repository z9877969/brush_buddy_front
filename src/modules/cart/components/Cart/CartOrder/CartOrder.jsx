import OrderPromoCode from './OrderPromoCode/OrderPromoCode';
import OrderSummary from './OrderSummary/OrderSummary';
import s from './CartOrder.module.scss';
import { totalPriceDiscount } from '../CartListCurrentProducts/cartListProductsFunc';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '@redux/cart/selectorsCart';

const CartOrder = () => {
  const total = useSelector(getTotalPrice);
  const priceDisc = totalPriceDiscount(total);

  return (
    <section className={s.blockRight}>
      <OrderPromoCode priceDisc={priceDisc} />
      <OrderSummary totalPrice={total} priceDisc={priceDisc} />
    </section>
  );
};
export default CartOrder;
