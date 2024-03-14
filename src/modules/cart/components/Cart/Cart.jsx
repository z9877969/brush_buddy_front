import { Container } from 'shared/components';
import s from './Cart.module.scss';
import CartListCurrentProducts from './CartListCurrentProducts/CartListCurrentProducts';
import CartOrder from './CartOrder/CartOrder';
import { notUsedPromoCode } from '@redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(notUsedPromoCode());
  }, [dispatch]);
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
