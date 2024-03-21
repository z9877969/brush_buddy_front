import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { RoundButton } from 'shared/components';
import { ProductTypeIcon } from 'shared/components';
import { ProductWatermark } from 'shared/components';
import * as img from './images';
import { sprite } from 'shared/icons';

import s from './ProductCardItem.module.scss';

const ProductCardItem = ({
  title,
  price,
  salePrice,
  type,
  watermark,
  // images,
}) => {
  const [watermarkValue] = watermark;
  const navigate = useNavigate();
  const isAvalible = true;
  // const { url } = images?.[0] || { url: '' };

  const hanleClick = () => {
    navigate(`/products/${title}`);
  };
  return (
    <li className={clsx(s.productItem, !isAvalible && s.unavailable)}>
      <Link to={`/products/${title}`}>
        <img src={img['product_1']} alt={title} className={s.productImg} />
        <ProductTypeIcon type={type} sprite={sprite} />
        <ProductWatermark watermark={watermarkValue} sprite={sprite} />
        <p className={s.productName}>{title}</p>
      </Link>
      <div className={s.productFooter}>
        {salePrice ? (
          <div className={s.priceWrapper}>
            <p className={clsx(s.price, s.sale)}>{salePrice} грн</p>
            <p className={clsx(s.price, s.oldPrice)}>{price} грн</p>
          </div>
        ) : (
          <p className={s.price}>{price} грн</p>
        )}
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
