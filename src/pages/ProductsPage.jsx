import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  initialFilterValues,
  ProductsPageFilter,
} from 'modules/productsPageFilter';
import {
  PaginateProdList,
  NumberOfProducts,
  ProductsPageWrapper,
  Wrappers,
} from 'modules/paginateProdList';
import { ProductsListSwiper } from 'modules/productsListSwiper';
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

  const filteredProducts = useFilteredProducts(products, filter);
  const helpersProductsList = useMemo(
    () => products.filter((el) => el.category.value === 'helpers'),
    [products]
  );
  const isSelectedFilters = useMemo(
    () =>
      Object.values(filter).filter((el) => Array.isArray(el) && el.length > 0)
        .length > 0,
    [filter]
  );

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
            productType === PRODUCT_TYPES.ALL_PRODUCTS ? [] : [productType],
          category: { label: 'Усі', value: null },
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
      <Wrappers.MainContent>
        <ProductsPageFilter setFilter={setFilter} filter={filter} />
        <div>
          {isSelectedFilters && (
            <Wrappers.SelectedFilters>
              <SelectedFilters
                filter={filter}
                findedProductsLength={filteredProducts.length}
                setFilter={setFilter}
                isSelectedFilters={isSelectedFilters}
              />

              <NumberOfProducts productsLength={filteredProducts.length} />
            </Wrappers.SelectedFilters>
          )}
          <PaginateProdList products={filteredProducts} />
        </div>
      </Wrappers.MainContent>
      {filter.category.every(({ value }) => value !== 'helpers') && (
        <ProductsListSwiper
          products={helpersProductsList}
          title={'Допомагайки'}
        />
      )}
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
