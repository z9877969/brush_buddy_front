import CartListCurrentItem from '../CarListCurrentItem/CartListCurrentItem';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectProd } from '@redux/cart/selectorsCart';
import {
  //addProduct,
  removeProduct,
  changeProductQuantity,
  addTotalPrice,
} from '@redux/cart/cartSlice';
import { useEffect } from 'react';

const CartListCurrentProducts = () => {
  const products = useSelector(selectProd);
  const dispatch = useDispatch();

  const changeCount = (id, newCount) => {
    dispatch(changeProductQuantity(id, newCount));
  };
  useEffect(() => {
    dispatch(addTotalPrice());
  }, [dispatch]);

  const onClickDelete = (id) => {
    dispatch(removeProduct({ id }));
  };

  // const onClickAdd = (product) => {
  //   dispatch(addProduct(product));
  // };

  return (
    <section>
      <MainTitle title={'Мій кошик'} />
      <ul className={s.listOrederdProducts}>
        <CartListCurrentItem
          data={products}
          changeCount={changeCount}
          onClickDelete={onClickDelete}
          //onClickAdd={onClickAdd}
        />
      </ul>
    </section>
  );
};

export default CartListCurrentProducts;
