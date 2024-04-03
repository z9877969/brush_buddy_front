import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
import { isEqual } from 'lodash';
import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
import { ProductsPageWrapper } from 'modules/productsPageWrapper';
import { NumberOfProducts } from 'modules/paginateProdList/index.js';
import { SelectedFilters } from 'modules/selectedFilters';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCT_TYPES } from 'shared/constants';
import { initialFilterValues } from 'modules/productsPageFilter';
import { useFilteredProducts } from 'hooks/useFilteredProducts';
import { selectProductsList } from '@redux/products/productsSelectors';

const ProductsPage = () => {
  const [search, setSearch] = useSearchParams();
  const products = useSelector(selectProductsList);
  const [filter, setFilter] = useState(
    () => JSON.parse(sessionStorage.getItem('filter')) || initialFilterValues
  );

  const productType = search.get('productType');
  const hasChanged = !isEqual(filter, initialFilterValues);

  const filteredProducts = useFilteredProducts(products, filter);

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
        {hasChanged && (
          <>
            <SelectedFilters filter={filter} setFilter={setFilter} />
            <NumberOfProducts productsLength={filteredProducts.length} />
          </>
        )}
        <PaginateProdList products={filteredProducts} />
      </div>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
