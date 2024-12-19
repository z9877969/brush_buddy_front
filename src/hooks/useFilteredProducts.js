import { useMemo } from 'react';
import { sortByAvailability } from 'helpers/sortByAvailability';
import { sortingTypesDict } from 'modules/productsPageFilter/data/options';

export const useFilteredProducts = (products, filter) => {
  return useMemo(() => {
    if (!filter) return products;

    /* 
      *** filter 
      age: {value: null, label: 'Усі'} // age
      brand: {value: null, label: 'Усі'} // maker
      category: {value: null, label: 'Усі'}
      recommendedFor: [] // userType 
      search: "" // title
      sortBy: {value: null, label: 'Товари'} // price+ | price- | watermark[wow,sale] |
    */
    /* 
    *** product
    age: ['0to3', '4to6', '6to12']
    category: {_id: '66196c344359dc726e3f8824', label: 'Зубна паста', value: 'toothpastes'}
    maker: {_id: '66196d5e4359dc726e3f8830', label: 'Brush-baby', value: 'brushbaby'}
    title: "Дитяча зубна паста Brush baby"
    userType: ['child']
   */

    let filteredList = products.filter((product) => {
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
        age.length &&
        age.every(({ value }) => !product.age.includes(value))
      ) {
        return false;
      }
      if (
        category.length &&
        category.every(({ value }) => value !== product.category.value)
      ) {
        return false;
      }
      if (!category.length && product.category.value === 'helpers') {
        return false;
      }
      if (recommendedFor && recommendedFor.length > 0) {
        if (
          !recommendedFor.some((target) => product.userType.includes(target))
        ) {
          return false;
        }
      }
      if (
        brand.length &&
        brand.every(({ value }) => value !== product.maker.value)
      ) {
        return false;
      }
      return true;
    });

    if (filter.sortBy) {
      switch (filter.sortBy.value) {
        case sortingTypesDict.PRICE_ASC.value:
          filteredList.sort((a, b) => {
            const aPrice = a.variants[0].salePrice || a.variants[0].price;
            const bPrice = b.variants[0].salePrice || b.variants[0].price;
            return aPrice - bPrice;
          });
          break;
        case sortingTypesDict.PRICE_DESC.value:
          filteredList.sort((a, b) => {
            const aPrice = a.variants[0].salePrice || a.variants[0].price;
            const bPrice = b.variants[0].salePrice || b.variants[0].price;
            return bPrice - aPrice;
          });
          break;
        case sortingTypesDict.ALPH_ASC.value:
          filteredList.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case sortingTypesDict.ALPH_DESC.value:
          filteredList.sort((a, b) => b.title.localeCompare(a.title));
          break;
        default:
          break;
      }
    }
    const sortProdByAvailability = sortByAvailability(filteredList);

    return sortProdByAvailability;
  }, [filter, products]);
};
