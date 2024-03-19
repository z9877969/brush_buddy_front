import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
import { ProductCartPagination } from 'modules/productPagePagination';
import data from '../modules//productPagePagination/components/datatest/productstest.js';

const ProductsPage = () => {
  return (
    <>
      <ProductsPageFilter />
      <ProductCartPagination data={data} />
    </>
  );
};

export default ProductsPage;
