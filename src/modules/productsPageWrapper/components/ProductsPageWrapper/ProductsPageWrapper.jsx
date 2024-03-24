import { Container, MainTitle } from 'shared/components';
import s from './productsPageWrapper.module.scss';

const ProductsPageWrapper = ({ children }) => {
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

export default ProductsPageWrapper;
