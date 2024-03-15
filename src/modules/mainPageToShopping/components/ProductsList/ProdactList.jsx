import { useState, useEffect, useMemo } from 'react';
import { RoundButton } from 'shared/components';
import ProductCardItem from '../ProductCardItem/ProductCardItem';
import s from './ProductsList.module.scss';

const ProductsList = ({ title, products, batchSize }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(batchSize);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState(false);

  useEffect(() => {
    if (startIndex === 0) {
      setIsPrevDisabled(true);
    } else {
      setIsPrevDisabled(false);
    }

    if (endIndex >= products.length) {
      setIsNextDisabled(true);
    } else {
      setIsNextDisabled(false);
    }
  }, [startIndex, endIndex, products.length]);

  useEffect(() => {
    if (products.length > 0 && batchSize > 0) {
      setStartIndex(0);
      setEndIndex(batchSize);
    }
  }, [products, batchSize]);

  useEffect(() => {
    if (products.length > 0 && batchSize > 0) {
      setVisibleProducts(products.slice(startIndex, endIndex));
    }
  }, [products, batchSize, startIndex, endIndex]);

  const goNext = () => {
    if (endIndex < products.length) {
      setStartIndex(startIndex + batchSize);
      setEndIndex(endIndex + batchSize);
    }
  };

  const goBack = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - batchSize);
      setEndIndex(endIndex - batchSize);
    }
  };

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
