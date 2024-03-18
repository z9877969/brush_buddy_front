import { Container } from 'shared/components';
import s from './Cart.module.scss';
import CartListCurrentProducts from './CartListCurrentProducts/CartListCurrentProducts';
import CartOrder from './CartOrder/CartOrder';
import CartForms from './CartForms/CartForms';

const Cart = () => {
  return (
    <section>
      <Container className={s.cartBlock}>
        <section>
          <CartListCurrentProducts />
          <CartForms />
          <p>component delivery</p>
        </section>
        <CartOrder />
      </Container>
    </section>
  );
};

export default Cart;
