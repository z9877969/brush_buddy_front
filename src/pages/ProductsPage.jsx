import ProductsPageFilter from 'modules/productsPageFilter/components/ProductsPageFilter/ProductsPageFilter';
// import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { PaginateProdList } from 'modules/paginateProdList/index.js';
import { Container, MainTitle } from 'shared/components';

const ProductsPage = () => {
  const products = useSelector((s) => s.products.list);
  // const [filter, setFilter] = useState(null);

  // const filteredProducts = useMemo(() => {
  //   if (!filter) return products;
  //   products.filter((el) => el);
  // }, [filter, products]);

  return (
    <Container>
      <MainTitle title={'У нас Ви можете замовити'} />
      <div
        style={{
          display: 'flex',
          columnGap: '32px',
        }}
      >
        <ProductsPageFilter />
        <PaginateProdList products={products} />
      </div>
    </Container>
  );
};

export default ProductsPage;
