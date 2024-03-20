import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
// import { ProductCartPagination } from 'modules/productPagePagination';
// import data from '../modules/productPagePagination/data/productstest.js';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
// import { addProductsList } from '@redux/products/productsSlice.js';
// import moduleName from 'module';

const ProductsPage = () => {
  const products = useSelector((s) => s.products.list);
  const [filter, setFilter] = useState(null); // {ageType: "4to6", }

  const filteredProducts = useMemo(() => {
    if (!filter) return products;
    products.filter((el) => el);
  }, [filter, products]);

  useEffect(() => {
    // addProductsList(pro)
  }, []);
  return (
    <>
      <ProductsPageFilter setFilter={setFilter} />
      <PaginateProdList products={filteredProducts} />
    </>
  );
};

export default ProductsPage;
