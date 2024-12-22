import { selectProductsList } from '@redux/products/productsSelectors';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useRecommendedProducts = (product = {}) => {
  const products = useSelector(selectProductsList);

  const { age } = product;

  const productsInStock = useMemo(() => {
    return products.filter((product) => {
      return (
        product.variants?.length &&
        product.variants.some((variant) => variant.salePrice > 0)
      );
    });
  }, [products]);

  const recommendedProducts = useMemo(() => {
    if (!age || !Array.isArray(age)) return [];
    return productsInStock.filter((prod) =>
      prod.age.some((item) => age.includes(item))
    );
  }, [productsInStock, age]);

  return recommendedProducts;
};
