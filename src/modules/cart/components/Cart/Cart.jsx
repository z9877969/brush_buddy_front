import { Container } from 'shared/components';
import s from './Cart.module.scss';
import CartListCurrentProducts from '../CartListCurrentProducts/CartListCurrentProducts';
import CartOrder from '../CartOrder/CartOrder';
import CartForms from '../CartForms/CartForms';
import { Loader } from 'shared/components';
import { notUsedPromoCode } from '@redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLoading } from '@redux/cart/selectorsCart';

const Cart = () => {
  const dispatch = useDispatch();
  const showLoader = useSelector(isLoading);
  useEffect(() => {
    dispatch(notUsedPromoCode());
  }, [dispatch]);
  return (
    <section>
      <Container className={s.cartBlock}>
        <section>
          {showLoader && <Loader />}
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
