import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isEqual } from 'lodash';
import {
  initialFilterValues,
  ProductsPageFilter,
} from 'modules/productsPageFilter';
import {
  PaginateProdList,
  NumberOfProducts,
  ProductsPageWrapper,
} from 'modules/paginateProdList';
import { SelectedFilters } from 'modules/selectedFilters';
import { PRODUCT_TYPES } from 'shared/constants';
import { selectProductsList } from '@redux/products/productsSelectors';
import { useFilteredProducts } from 'hooks/useFilteredProducts';

const ProductsPage = () => {
  const [search] = useSearchParams();
  const products = useSelector(selectProductsList);
  const [filter, setFilter] = useState(
    () => JSON.parse(sessionStorage.getItem('filter')) || initialFilterValues
  );

  const productType = search.get('productType');
  const hasChanged = !isEqual(filter, initialFilterValues);

  const filteredProducts = useFilteredProducts(products, filter);
  // const filteredProducts = products;

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
          recommendedFor: [productType],
        };
      });
    } else {
      setFilter((p) => ({
        ...p,
        recommendedFor: [],
        category: { value: 'helpers', label: 'Допомагайки' },
      }));
    }
  }, [productType]);

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
