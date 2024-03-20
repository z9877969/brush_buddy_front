import { useState, useEffect, useMemo } from 'react';
import { Container, LinkButton, MainTitle } from 'shared/components';
import s from './MainPageToShopping.module.scss';
import products from '../../../products/db/products.json';
import ProductsList from '../ProductsList/ProdactList';

const MainPageToShopping = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [prodToRender, setProdToRender] = useState(null);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setProdToRender(1);
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      setProdToRender(2);
    } else {
      setProdToRender(4);
    }
  }, [screenWidth]);

  const availableProducts = products.filter(
    (product) => product.total_quantity > 0
  );

  const noventlyProducts = useMemo(() => {
    return availableProducts.filter((product) => product.status === 'novently');
  }, [availableProducts]);

  const saleProducts = useMemo(() => {
    return availableProducts.filter((product) => product.status === 'sale');
  }, [availableProducts]);

  // const noventlyProducts = products.filter(
  //   (product) => product.status === 'novently'
  // );

  // const saleProducts = products.filter((product) => product.status === 'sale');

  return (
    <section className={s.shoppingSection}>
      <Container>
        <MainTitle title={'До покупок'} className={s.shoppingTitle} />
        <ProductsList
          title={'Новинки'}
          products={noventlyProducts}
          batchSize={prodToRender}
        />
        <ProductsList
          title={'Акційні товари'}
          products={saleProducts}
          batchSize={prodToRender}
        />
        <LinkButton
          title={'Більше товарів'}
          className={s.productsBtn}
          to={'/products'}
        />
      </Container>
    </section>
  );
};

export default MainPageToShopping;
