import { useMemo } from 'react';
import { sortByAvailability } from 'helpers/sortByAvailability';

export const useFilteredProducts = (products, filter) => {
  return useMemo(() => {
    if (!filter) return products.slice();

    let filteredList = products.slice().filter((product) => {
      const { search, age, category, recommendedFor, brand } = filter;
      if (
        search &&
        !product.title
          .toLowerCase()
          .split(' ')
          .filter((el) => el.length > 0)
          .join(' ')
          .includes(search.toLowerCase().trim())
      ) {
        return false;
      }
      if (
        age &&
        age.value &&
        product.ageType &&
        !product.ageType.includes(age.value)
      ) {
        return false;
      }
      if (category && category.value && product.category !== category.value) {
        return false;
      }
      if (recommendedFor && recommendedFor.length > 0) {
        if (!recommendedFor.some((target) => product.type.includes(target))) {
          return false;
        }
      }
      if (brand && brand.value && product.maker !== brand.value) {
        return false;
      }
      return true;
    });

    if (filter.sortBy) {
      switch (filter.sortBy.value) {
        case 'increment':
          filteredList.sort((a, b) => {
            const aPrice = a.salePrice || a.price;
            const bPrice = b.salePrice || b.price;
            return aPrice - bPrice;
          });
          break;
        case 'decrement':
          filteredList.sort((a, b) => {
            const aPrice = a.salePrice || a.price;
            const bPrice = b.salePrice || b.price;
            return bPrice - aPrice;
          });
          break;
        case 'new':
          filteredList = filteredList.filter((product) =>
            product.watermark.includes('wow')
          );
          break;
        case 'actions':
          filteredList = filteredList.filter(
            (product) => product.salePrice && product.salePrice < product.price
          );
          break;
        default:
          break;
      }
    }
    const sortProdByAvailability = sortByAvailability(filteredList);

    return sortProdByAvailability;
  }, [filter, products]);
};
