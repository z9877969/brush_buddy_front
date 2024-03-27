import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RoundButton } from 'shared/components';
import { ProductTypeIcon } from 'shared/components';
import { ProductWatermark } from 'shared/components';
import * as img from 'shared/images/productItem';
import { sprite } from 'shared/icons';
import { addProduct } from '@redux/cart/cartSlice';
import { useDispatch } from 'react-redux';

import s from './ProductCardItem.module.scss';

const ProductCardItem = ({
  title,
  price,
  salePrice,
  type,
  watermark,
  images,
  colors,
  flavors,
  id,
}) => {
  const [watermarkValue] = watermark;

  const { url } = images?.[0] || { url: null };
  const inStockColorsValues =
    colors && colors.length && colors.map((color) => color.inStock);

  const inStockFlavorsValues =
    flavors && flavors.length && flavors.map((flavor) => flavor.inStock);

  const someColorsInStock =
    inStockColorsValues &&
    inStockColorsValues.length &&
    inStockColorsValues.some((value) => value === true);

  const someFlavorsInStock =
    inStockFlavorsValues &&
    inStockFlavorsValues.length &&
    inStockFlavorsValues.some((value) => value === true);

  const disableBtn = colors?.length ? !someColorsInStock : !someFlavorsInStock;
  const dispatch = useDispatch();
  const mainVariant = flavors?.length ? flavors[0] : colors[0];

  const hanleClick = () => {
    dispatch(addProduct({ title, images: url, price, salePrice, mainVariant }));
  };
  return (
    <li className={clsx(s.productItem, disableBtn && s.unavailable)}>
      <Link to={`/products/${id}`}>
        <img
          src={url ?? img['product_1']}
          alt={title}
          className={s.productImg}
        />
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
          disabled={disableBtn}
        />
      </div>
    </li>
  );
};

export default ProductCardItem;
