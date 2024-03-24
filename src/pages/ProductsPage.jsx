import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
// import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
import { ProductsPageWrapper } from 'modules/productsPageWrapper';

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
      <PaginateProdList products={products} />
    </ProductsPageWrapper>
  );
};

export default ProductsPage;
