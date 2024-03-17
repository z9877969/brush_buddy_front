import { useState, useEffect } from 'react';

const useProductListState = (products, batchSize) => {
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

  return {
    visibleProducts,
    isNextDisabled,
    isPrevDisabled,
    goNext,
    goBack,
  };
};

export default useProductListState;
