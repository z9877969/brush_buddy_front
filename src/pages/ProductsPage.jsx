import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';

import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
import { ProductsPageWrapper } from 'modules/productsPageWrapper';
import { NumberOfProducts } from 'modules/paginateProdList/index.js';
import { SelectedFilters } from 'modules/selectedFilters';
import { useEffect, useMemo, useState } from 'react';

const ProductsPage = () => {
  const products = useSelector((s) => s.products.list);
  const [filter, setFilter] = useState(() => JSON.parse(sessionStorage.getItem('filter')) || null);

  // const filteredProducts = useMemo(() => {
  //   if (!filter) return products;
  //   products.filter((el) => el);
  // }, [filter, products]);

  const filteredProducts = useMemo(() => {
    if (!filter) return products.slice();

    const filteredList = products.slice().filter((product) => {
      const { search, age, category, recommendedFor, brand } = filter;

      if (
        search &&
        !product.title.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      if (age && !product.ageType.includes(age)) {
        return false;
      }

      if (category && product.category !== category) {
        return false;
      }

      if (recommendedFor && recommendedFor.length > 0) {
        if (
          !recommendedFor.every((target) =>
            product.recommendedFor.includes(target)
          )
        ) {
          return false;
        }
      }

      if (brand && product.maker !== brand) {
        return false;
      }

      return true;
    });

    if (filter.sortBy) {
      switch (filter.sortBy) {
        case 'increment':
          filteredList.sort((a, b) => a.price - b.price);
          break;
        case 'decrement':
          filteredList.sort((a, b) => b.price - a.price);
          break;

        case 'new':
          filteredList.filter((product) => product.watermark.includes('wow'));
          break;

        case 'actions':
          filteredList.filter(
            (product) => product.salePrice && product.salePrice < product.price
          );
          break;
        default:
          break;
      }
    }
    return filteredList;
  }, [filter, products]);

  useEffect(() => {
    sessionStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  return (
    <ProductsPageWrapper>
      <ProductsPageFilter onFormSubmit={setFilter} filter={filter} />
      <div>
        {typeof filter === 'object' &&
          filter !== null &&
          Object.keys(filter).length > 0 && (
            <SelectedFilters filter={filter} setFilter={setFilter} />
          )}
        <NumberOfProducts productsLength={filteredProducts.length} />
        <PaginateProdList products={filteredProducts} />
      </div>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
