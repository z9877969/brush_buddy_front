import { useEffect, useState } from 'react';
import ProductsList from '../ProductsList/ProductsList';
import { Container, LinkButton, MainTitle } from 'shared/components';
import s from './MainPageToShopping.module.scss';
import { ROUTES } from 'shared/constants';
import { getPopularProductsApi } from 'services/brushbuddyApi';

const MainPageToShopping = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    getPopularProductsApi()
      .then((p) => setPopularProducts(p))
      // eslint-disable-next-line
      .catch((err) => console.warn(err));
  }, []);

  return (
    <section className={s.shoppingSection}>
      <Container>
        <MainTitle title={'До покупок'} className={s.shoppingTitle} />
        {popularProducts.length > 0 && (
          <ProductsList title={'Популярні'} products={popularProducts} />
        )}
        <LinkButton
          title={'Більше товарів'}
          className={s.productsBtn}
          to={`${ROUTES.PRODUCTS}?page=1`}
        />
      </Container>
    </section>
  );
};

export default MainPageToShopping;
