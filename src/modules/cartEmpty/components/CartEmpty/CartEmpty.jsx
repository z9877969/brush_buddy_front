import { Container, LinkButton } from 'shared/components';
import s from './CartEmpty.module.scss';
import { ROUTES } from 'shared/constants';
import { animation } from 'modules/cartEmpty/images';

const CartEmpty = () => {
  return (
    <Container className={s.section}>
      <img src={animation} alt="animation" className={s.animation} />

      <h2 className={s.title}>Кошик порожній</h2>

      <LinkButton
        title={'До покупок'}
        className={s.linkButton}
        to={`${ROUTES.PRODUCTS}?page=1`}
      />
    </Container>
  );
};

export default CartEmpty;
