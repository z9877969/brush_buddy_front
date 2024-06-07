import { selectProductsList } from '@redux/products/productsSelectors';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useRecommendedProducts = (product) => {
  const products = useSelector(selectProductsList);

  const { age } = product;

  const productsInStock = useMemo(() => {
    const productsWithColorsInStock = products.filter((product) => {
      return (
        product.colors?.length &&
        product.colors.some((color) => color.inStock === true)
      );
    });

    const productsWithFlavorsInStock = products.filter((product) => {
      return (
        product.flavors?.length &&
        product.flavors.some((flavor) => flavor.inStock === true)
      );
    });

    const allProductsInStock = [
      ...productsWithColorsInStock,
      ...productsWithFlavorsInStock,
    ];

    return allProductsInStock;
  }, [products]);

  const recommendedProducts = useMemo(() => {
    if (!age || !Array.isArray(age)) return [];
    return productsInStock.filter((prod) =>
      prod.age.some((item) => age.includes(item))
    );
  }, [productsInStock, age]);

  return recommendedProducts;
};
