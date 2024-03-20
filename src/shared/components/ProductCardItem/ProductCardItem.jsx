import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RoundButton } from 'shared/components';
import { ProductStatusIcon } from 'shared/components';
import { ProductCategoryIcon } from 'shared/components';
import * as images from './images';
import { sprite } from 'shared/icons';
import { addProduct } from '@redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import s from './ProductCardItem.module.scss';

const ProductCardItem = ({
  id,
  name,
  price,
  old_price,
  category,
  age_range,
  status,
  image,
  total_quantity,
}) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const isAvalible = Boolean(total_quantity > 0);

  const hanleClick = () => {
    dispatch(
      addProduct({
        id,
        name,
        price,
        old_price,
        category,
        age_range,
        status,
        image,
      })
    );
    setIsAddedToCart(true);
  };
  return (
    <li className={clsx(s.productItem, !isAvalible && s.unavailable)}>
      <Link to={`/products/${id}`}>
        <img src={images[image]} alt={name} className={s.productImg} />
        <ProductCategoryIcon
          category={category}
          age_range={age_range}
          sprite={sprite}
        />
        <ProductStatusIcon status={status} sprite={sprite} />
      </Link>
      <p className={s.productName}>{name}</p>
      <div className={s.productFooter}>
        <div className={s.priceWrapper}>
          <p className={clsx(s.price, status === 'sale' && s.sale)}>
            {price} грн
          </p>
          {old_price && (
            <p className={clsx(s.price, s.oldPrice)}>{old_price} грн</p>
          )}
        </div>
        <RoundButton
          iconId={'icon-cart'}
          className={s.cartBtn}
          onClick={hanleClick}
          disabled={isAddedToCart || !isAvalible}
        />
      </div>
    </li>
  );
};

export default ProductCardItem;
