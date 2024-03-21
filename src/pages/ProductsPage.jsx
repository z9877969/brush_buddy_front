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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: '64px',
          columnGap: '32px',
        }}
      >
        <MainTitle
          title={'У нас Ви можете замовити'}
          style={{ width: '100%' }}
        />
        <ProductsPageFilter />
        <div
          style={{
            width: '948px',
          }}
        >
          <h2>Selected Filters</h2>
          <PaginateProdList products={products} />
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;
