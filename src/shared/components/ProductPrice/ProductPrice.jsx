import clsx from 'clsx';
import s from './ProductPrice.module.scss';

const ProductPrice = ({ price, salePrice }) => {
  return salePrice ? (
    <div className={s.priceWrapper}>
      <p className={clsx(s.price, s.sale)}>{salePrice} грн</p>
      <p className={clsx(s.price, s.oldPrice)}>{price} грн</p>
    </div>
  ) : (
    <p className={s.price}>{price} грн</p>
  );
};

export default ProductPrice;
