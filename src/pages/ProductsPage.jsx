import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
// import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
import { ProductsPageWrapper } from 'modules/productsPageWrapper';
import { NumberOfProducts } from 'modules/paginateProdList/index.js';
import { SelectedFilters } from 'modules/selectedFilters';

const ProductsPage = () => {
  const products = useSelector((s) => s.products.list);
  // const [filter, setFilter] = useState(null);

  // const filteredProducts = useMemo(() => {
  //   if (!filter) return products;
  //   products.filter((el) => el);
  // }, [filter, products]);

  return (
    <ProductsPageWrapper>
      <ProductsPageFilter />
      <div>
        <SelectedFilters />
        <NumberOfProducts productsLength={products.length} />
        <PaginateProdList products={products} />
      </div>
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
