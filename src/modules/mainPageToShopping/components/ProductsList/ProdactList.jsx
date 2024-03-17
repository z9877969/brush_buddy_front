import { useMemo } from 'react';
import { RoundButton } from 'shared/components';
import ProductCardItem from '../ProductCardItem/ProductCardItem';
import { useProductListState } from 'hooks';
import s from './ProductsList.module.scss';

const ProductsList = ({ title, products, batchSize }) => {
  const { visibleProducts, isNextDisabled, isPrevDisabled, goNext, goBack } =
    useProductListState(products, batchSize);

  const elements = useMemo(() => {
    return visibleProducts.map((product) => (
      <ProductCardItem
        id={product.id}
        name={product.name}
        price={product.price}
        old_price={product.old_price}
        category={product.category}
        age_range={product.age_range}
        status={product.status}
        imgUrl={product.imgUrl}
        key={product.id}
      />
    ));
  }, [visibleProducts]);

  return (
    <>
      <div className={s.titleWrapper}>
        <h4 className={s.prodSubtitle}>{title}</h4>
        <div className={s.buttonsWrapper}>
          <RoundButton
            iconId={'icon-chevron-left'}
            className={s.scrollBtn}
            onClick={goBack}
            disabled={isPrevDisabled}
          />
          <RoundButton
            iconId={'icon-chevron-right'}
            className={s.scrollBtn}
            onClick={goNext}
            disabled={isNextDisabled}
          />
        </div>
      </div>
      <ul className={s.prodList}>{elements}</ul>
    </>
  );
};

export default ProductsList;
