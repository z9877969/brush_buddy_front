import CartListCurrentItem from '../CarListCurrentItem/CartListCurrentItem';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectProd } from '@redux/cart/selectorsCart';
import { addTotalPrice } from '@redux/cart/cartSlice';
import { useEffect } from 'react';

const CartListCurrentProducts = () => {
  const products = useSelector(selectProd);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTotalPrice(products));
  }, [dispatch, products]);

  return (
    <section>
      <MainTitle title={'Мій кошик'} />
      <ul className={s.listOrederdProducts}>
        <CartListCurrentItem data={products} />
      </ul>
    </section>
  );
};

export default CartListCurrentProducts;
