import CartListCurrentItem from '../CarListCurrentItem/CartListCurrentItem';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectProd } from '@redux/cart/selectorsCart';
import {
  //addProduct,
  removeProduct,
  changeProductAmount,
  addTotalPrice,
} from '@redux/cart/cartSlice';
import { useEffect } from 'react';
//import useAddProduct from 'modules/cart/helpers/cartAddProductHook';

const CartListCurrentProducts = () => {
  const products = useSelector(selectProd);
  const dispatch = useDispatch();
  //const onClickAdd = useAddProduct();

  const changeCount = (id, flavor, volume, color, quantity, newCount) => {
    dispatch(
      changeProductAmount(
        id,
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

  const onClickDelete = (id) => {
    dispatch(removeProduct({ id }));
  };

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
