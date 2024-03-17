import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RoundButton } from 'shared/components';
import ProductStatusIcon from '../ProductStatusIcon/ProductStatusIcon';
import ProductCategoryIcon from '../ProductCategoryIcon/ProductCategoryIcon';
import * as images from '../../images';
import { sprite } from 'shared/icons';
import { addProduct } from '@redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

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
}) => {
  const dispatch = useDispatch();
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
  };
  return (
    <li className={s.productItem}>
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
          <p className={clsx(s.price, status === 'sale' && s.sale)}>{price}</p>
          {old_price && (
            <p className={clsx(s.price, s.oldPrice)}>{old_price}</p>
          )}
        </div>
        <RoundButton
          iconId={'icon-cart'}
          className={s.cartBtn}
          onClick={hanleClick}
        />
      </div>
    </li>
  );
};

export default ProductCardItem;
