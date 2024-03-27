import { Container } from 'shared/components';
import s from './Cart.module.scss';
import CartListCurrentProducts from '../CartListCurrentProducts/CartListCurrentProducts';
import CartOrder from '../CartOrder/CartOrder';
import CartForms from '../CartForms/CartForms';
import { notUsedPromoCode } from '@redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import CartPaymentMethods from '../CartPaymentMethods/CartPaymentMethods';

const Cart = () => {
  const dispatch = useDispatch();
  const [canSubmit, setCanSubmit] = useState(false);
  const [isValidating, setIsValidating] = useState(false);

  const handleValidateForm = () => {
    setIsValidating(true);
  };

  useEffect(() => {
    dispatch(notUsedPromoCode());
  }, [dispatch]);
  return (
    <section>
      <Container className={s.cartBlock}>
        <section>
          <CartListCurrentProducts />
          <CartForms isValidating={isValidating} setCanSubmit={setCanSubmit} />
          <CartPaymentMethods />
        </section>
        <CartOrder canSubmit={canSubmit} validateForm={handleValidateForm} />
      </Container>
    </section>
  );
};

export default Cart;
