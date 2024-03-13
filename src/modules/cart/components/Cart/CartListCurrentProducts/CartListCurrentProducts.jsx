import CartListCurrentItem from './CarListCurrentItem/CartListCurrentItem';
import productsArray from './data-test';
import s from './CartListCurrentProducts.module.scss';
import { MainTitle } from 'shared/components';
import { useState } from 'react';
import totalPrice from './cartListProductsFunc';

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

  const onClickDelete = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };

  totalPrice(products);

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
