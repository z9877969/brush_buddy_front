import { useMemo } from 'react';
import { Container, LinkButton, MainTitle } from 'shared/components';
import s from './MainPageToShopping.module.scss';
import { useSelector } from 'react-redux';
import ProductsList from '../ProductsList/ProductsList';

const MainPageToShopping = () => {
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
        <ProductsList title={'Новинки'} products={wowProducts} />
        <ProductsList title={'Акційні товари'} products={saleProducts} />
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
