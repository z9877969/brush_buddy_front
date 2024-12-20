import CartListCurrentItem from '../CarListCurrentItem/CartListCurrentItem';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectProd } from '@redux/cart/selectorsCart';
import { calcTotalPrice } from '@redux/cart/cartSlice';
import { useEffect } from 'react';

const CartListCurrentProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProd);

  useEffect(() => {
    dispatch(calcTotalPrice());
  }, [dispatch]);

  return (
    <section>
      <MainTitle title={'Кошик'} />
      <ul className={s.listOrederdProducts}>
        <CartListCurrentItem data={products} />
      </ul>
    </section>
  );
};

export default CartListCurrentProducts;
