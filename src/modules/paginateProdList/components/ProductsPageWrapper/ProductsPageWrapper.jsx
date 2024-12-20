import { Container, MainTitle } from 'shared/components';
import s from './ProductsPageWrapper.module.scss';

const ProductsPageWrapper = ({ children }) => (
  <Container className={s.prodPageWrapper}>
    <MainTitle
      // title={'У нас Ви можете замовити'}
      title={'Зубне приладдя'}
      className={s.prodPageTitle}
    />
    {children}
  </Container>
);

export default ProductsPageWrapper;
