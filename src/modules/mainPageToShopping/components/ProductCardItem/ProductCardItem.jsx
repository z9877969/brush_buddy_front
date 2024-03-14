import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RoundButton } from 'shared/components';
import ProductStatusIcon from '../ProductStatusIcon/ProductStatusIcon';
import ProductCategoryIcon from '../ProductCategoryIcon/ProductCategoryIcon';
import * as images from '../../images';
import { sprite } from 'shared/icons';

import s from './ProductCardItem.module.scss';

const ProductCardItem = ({ product }) => {
  const { id, name, price, old_price, category, age_range, status, imgUrl } =
    product;

  return (
    <li className={s.productItem}>
      <Link to={`/products/${id}`}>
        <img src={images[imgUrl]} alt={name} className={s.productImg} />
        <ProductCategoryIcon
          category={category}
          age_range={age_range}
          sprite={sprite}
        />
        <ProductStatusIcon status={status} sprite={sprite} />
      </Link>
      <h5 className={s.productName}>{name}</h5>
      <div className={s.productFooter}>
        <div className={s.priceWrapper}>
          <p className={clsx(s.price, status === 'sale' && s.sale)}>{price}</p>
          {old_price && (
            <p className={clsx(s.price, s.oldPrice)}>{old_price}</p>
          )}
        </div>
        <RoundButton iconId={'icon-cart'} className={s.cartBtn} />
      </div>
    </li>
  );
};

export default ProductCardItem;
