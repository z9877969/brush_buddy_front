import clsx from 'clsx';
import s from './ProductPrice.module.scss';

const ProductPrice = ({ salePrice, price, quantity }) => {
  return salePrice > 0 && quantity > 0 ? (
    <div className={s.saleBlock}>
      <p className={clsx(s.salePrice)}>
        {salePrice}
        <span className={clsx(s.grn)}>грн</span>
      </p>
      <p className={clsx(s.notSalePrice, s.lineThrough)}>
        {price}
        <span className={clsx(s.grn, s.lineThrough)}>грн</span>
      </p>
    </div>
  ) : quantity > 0 ? (
    <p className={clsx(s.price)}>
      {price}
      <span className={clsx(s.grn)}>грн</span>
    </p>
  ) : (
    <p className={clsx(s.price, s.notHavePrices)}>
      {price}
      <span className={clsx(s.grn, s.notHavePrices)}>грн</span>
    </p>
  );
};

export default ProductPrice;
