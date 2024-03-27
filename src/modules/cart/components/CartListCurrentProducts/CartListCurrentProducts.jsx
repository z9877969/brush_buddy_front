import CartListCurrentItem from '../CarListCurrentItem/CartListCurrentItem';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectProd } from '@redux/cart/selectorsCart';
import {
  removeProduct,
  changeProductAmount,
  addTotalPrice,
} from '@redux/cart/cartSlice';
import { useEffect } from 'react';

const CartListCurrentProducts = () => {
  const products = useSelector(selectProd);
  const dispatch = useDispatch();

  const changeCount = (
    id,
    category,
    flavor,
    volume,
    color,
    quantity,
    newCount
  ) => {
    dispatch(
      changeProductAmount(
        id,
        category?.category,
        quantity,
        flavor?.flavor,
        volume?.volume,
        color?.color,
        newCount
      )
    );
  };
  useEffect(() => {
    dispatch(addTotalPrice(products));
  }, [dispatch, products]);

  const onClickDelete = ({ id, category, flavor, color, volume }) => {
    dispatch(
      removeProduct({
        id,
        category,
        flavor,
        volume,
        color,
      })
    );
  };

  return (
    <section>
      <MainTitle title={'Мій кошик'} />
      <ul className={s.listOrederdProducts}>
        <CartListCurrentItem
          data={products}
          changeCount={changeCount}
          onClickDelete={onClickDelete}
        />
      </ul>
    </section>
  );
};

export default CartListCurrentProducts;
