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

  const productsInStock = useMemo(() => {
    const productsWithColorsInStock = products.filter((product) => {
      return (
        product.colors?.length &&
        product.colors.some((color) => color.inStock === true)
      );
    });

    const productsWithFlavorsInStock = products.filter((product) => {
      return (
        product.flavors?.length &&
        product.flavors.some((flavor) => flavor.inStock === true)
      );
    });

    const allProductsInStock = [
      ...productsWithColorsInStock,
      ...productsWithFlavorsInStock,
    ];

    return allProductsInStock;
  }, [products]);

  const wowProducts = useMemo(() => {
    return productsInStock.filter((product) => product.watermark[0] === 'wow');
  }, [productsInStock]);

  const saleProducts = useMemo(() => {
    return productsInStock.filter((product) => product.watermark[0] === 'sale');
  }, [productsInStock]);

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
