export const sortByAvailability = (products) => {
  const sortedProducts = [...products];

  sortedProducts.sort((a, b) => {
    const aInStock = hasStock(a);
    const bInStock = hasStock(b);

    if (!aInStock && bInStock) {
      return 1;
    } else if (aInStock && !bInStock) {
      return -1;
    } else {
      return 0;
    }
  });

  return sortedProducts;
};

const hasStock = (product) => {
  return (
    (product.colors &&
      product.colors.length > 0 &&
      product.colors.some((color) => color.inStock)) ||
    (product.flavors &&
      product.flavors.length > 0 &&
      product.flavors.some((flavor) => flavor.inStock))
  );
};
