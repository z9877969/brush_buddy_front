import { Container } from 'shared/components';
import s from './Cart.module.scss';
import CartListCurrentProducts from './CartListCurrentProducts/CartListCurrentProducts';
import CartOrder from './CartOrder/CartOrder';

const Cart = () => {
  return (
    <section>
      <Container className={s.cartBlock}>
        <section>
          <CartListCurrentProducts />
          <p>component forms</p>
          <p>component delivery</p>
        </section>
        <CartOrder />
      </Container>
    </section>
  );
};

export default Cart;
