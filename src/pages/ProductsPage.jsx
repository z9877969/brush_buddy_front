import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
import { ProductCartPagination } from 'modules/productPagePagination';
import data from '../modules/productPagePagination/data/productstest.js';
import { useEffect } from 'react';
// import { addProductsList } from '@redux/products/productsSlice.js';
// import moduleName from 'module';

const ProductsPage = () => {
  useEffect(() => {
    // addProductsList(pro)
  }, []);
  return (
    <>
      <ProductsPageFilter />
      <ProductCartPagination data={data} />
    </>
  );
};

export default ProductsPage;
