import { Container } from 'shared/components';
import s from './Cart.module.scss';
import CartListCurrentProducts from '../CartListCurrentProducts/CartListCurrentProducts';
import CartOrder from '../CartOrder/CartOrder';
import CartForms from '../CartForms/CartForms';
import { notUsedPromoCode } from '@redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CartPaymentMethods from '../CartPaymentMethods/CartPaymentMethods';

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
          <CartForms />
          <CartPaymentMethods />
        </section>
        <CartOrder />
      </Container>
    </section>
  );
};

export default Cart;
