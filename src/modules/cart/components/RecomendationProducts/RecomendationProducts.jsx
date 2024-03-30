import { selectCartProductsRecomendations } from '@redux/cart/selectorsCart';
import { selectProductsList } from '@redux/products/productsSelectors';
import { ProductsList } from 'modules/mainPageToShopping';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'shared/components';

const RecomendationProducts = () => {
  const cartProductsRecomendations = useSelector(
    selectCartProductsRecomendations
  );
  const productsList = useSelector(selectProductsList);

  const recomendedProducts = useMemo(() => {
    return productsList.filter(({ type }) =>
      cartProductsRecomendations.some((el) => type.includes(el))
    );
  }, [productsList, cartProductsRecomendations]);
  return (
    <Container>
      <ProductsList
        title={'Рекомендовані товари'}
        products={recomendedProducts}
      />
    </Container>
  );
};

export default RecomendationProducts;
