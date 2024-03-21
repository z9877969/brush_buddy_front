import { useState, useEffect, useMemo } from 'react';
import { Container, LinkButton, MainTitle } from 'shared/components';
import s from './MainPageToShopping.module.scss';
import ProductsList from '../ProductsList/ProdactList';
import { useSelector } from 'react-redux';

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
  });

  useEffect(() => {
    if (screenWidth < 768) {
      setProdToRender(1);
    } else if (screenWidth >= 768 && screenWidth < 1199) {
      setProdToRender(2);
    } else {
      setProdToRender(4);
    }
  }, [screenWidth]);

  const products = useSelector((s) => s.products.list);

  const wowProducts = useMemo(() => {
    return products.filter((product) => product.watermark[0] === 'wow');
  }, [products]);

  const saleProducts = useMemo(() => {
    return products.filter((product) => product.watermark[0] === 'sale');
  }, [products]);

  return (
    <section className={s.shoppingSection}>
      <Container>
        <MainTitle title={'До покупок'} className={s.shoppingTitle} />
        <ProductsList
          title={'Новинки'}
          products={wowProducts}
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
