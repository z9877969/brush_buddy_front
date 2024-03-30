import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';

import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
import { ProductsPageWrapper } from 'modules/productsPageWrapper';
import { NumberOfProducts } from 'modules/paginateProdList/index.js';
import { SelectedFilters } from 'modules/selectedFilters';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCT_TYPES } from 'shared/constants';
import { initialFilterValues } from 'modules/productsPageFilter';

const ProductsPage = () => {
  const [search, setSearch] = useSearchParams();
  const products = useSelector((s) => s.products.list);
  const [filter, setFilter] = useState(
    () => JSON.parse(sessionStorage.getItem('filter')) || initialFilterValues
  );

  const productType = search.get('productType');

  const filteredProducts = useMemo(() => {
    if (!filter) return products.slice();

    let filteredList = products.slice().filter((product) => {
      const { search, age, category, recommendedFor, brand } = filter;

      if (
        search &&
        !product.title.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }
      if (
        age &&
        age.value &&
        product.ageType &&
        product.ageType.includes(age.value) &&
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
          filteredList.sort((a, b) => a.price - b.price);
          break;
        case 'decrement':
          filteredList.sort((a, b) => b.price - a.price);
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

    return filteredList;
  }, [filter, products]);

  useEffect(() => {
    sessionStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    if (!productType) return;
    if (productType !== PRODUCT_TYPES.HELPER) {
      setFilter((p) => {
        const filter = p ? p : {};
        return {
          ...filter,
          recommendedFor:
            filter.recommendedFor &&
            !filter.recommendedFor.includes(productType)
              ? [...filter.recommendedFor, productType]
              : filter.recommendedFor &&
                  filter.recommendedFor.includes(productType)
                ? filter.recommendedFor
                : [productType],
        };
      });
      setSearch({});
    } else {
      setFilter((p) => ({
        ...p,
        category: { value: 'helpers', label: 'Допомагайки' },
      }));
    }
    setSearch({});
  }, [search, productType, setSearch]);

  return (
    <ProductsPageWrapper>
      <ProductsPageFilter
        setFilter={setFilter}
        onFormSubmit={setFilter}
        filter={filter}
      />
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
