import CartListCurrentItem from './CarListCurrentItem/CartListCurrentItem';
import productsArray from './data-test';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';
import { useState } from 'react';

const CartListCurrentProducts = () => {
  const [products, setProducts] = useState(productsArray);

  const changeCount = (id, newCount) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          const isDisabledIncrement = newCount === product.total_quantity;
          return {
            ...product,
            quantity: newCount,
            isDisabledIncrement: isDisabledIncrement,
          };
        }
        return product;
      });
    });
  };

  return (
    <>
      <MainTitle title={'Мій кошик'} />
      <ul className={s.listOrederdProducts}>
        <CartListCurrentItem data={products} changeCount={changeCount} />
      </ul>
    </>
  );
};

export default CartListCurrentProducts;
