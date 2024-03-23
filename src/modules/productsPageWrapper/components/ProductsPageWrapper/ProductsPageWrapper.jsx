import { Container, MainTitle } from 'shared/components';
import s from './productsPageWrapper.module.scss';

const ProductsPageContainer = (children) => {
  return (
    <Container className={s.prodPageWrapper}>
      <MainTitle
        title={'У нас Ви можете замовити'}
        className={s.prodPageTitle}
      />
      {children}
    </Container>
  );
};

export default ProductsPageContainer;
