import { Container, LinkButton } from 'shared/components';
import s from './CartEmpty.module.scss';
import { ROUTES } from 'shared/constants';
import { Picture } from 'shared/components';

//img import
import mob1x from 'modules/cartEmpty/images/empty1_1x.jpg';
import mob2x from 'modules/cartEmpty/images/empty1_2x.jpg';
import tabDeck1x from 'modules/cartEmpty/images/empty2_1x.jpg';
import tabDeck2x from 'modules/cartEmpty/images/empty2_2x.jpg';

const CartEmpty = () => {
  return (
    <Container className={s.section}>
      <Picture
        mob1x={mob1x}
        mob2x={mob2x}
        tab1x={tabDeck1x}
        tab2x={tabDeck2x}
        desk1x={tabDeck1x}
        desk2x={tabDeck2x}
        defaultImg={mob1x}
        width={343}
        alt="photo"
      />

      <h2 className={s.title}>Кошик порожній</h2>

      <LinkButton
        title={'До покупок'}
        className={s.linkButton}
        to={ROUTES.PRODUCTS}
      />
    </Container>
  );
};

export default CartEmpty;
