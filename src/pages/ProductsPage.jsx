import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
// import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
import { ProductsPageWrapper } from 'modules/productsPageWrapper';
import { NumberOfProducts } from 'modules/paginateProdList/index.js';
import { SelectedFilters } from 'modules/selectedFilters';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
  const products = useSelector((s) => s.products.list);
  const [filter, setFilter] = useState(() => sessionStorage.getItem('filter'));

  // const filteredProducts = useMemo(() => {
  //   if (!filter) return products;
  //   products.filter((el) => el);
  // }, [filter, products]);
  useEffect(() => {
    sessionStorage.setItem('filter', filter);
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
        <NumberOfProducts productsLength={products.length} />
        <PaginateProdList products={products} />
      </div>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
