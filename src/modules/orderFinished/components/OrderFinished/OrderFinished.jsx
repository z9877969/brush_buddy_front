import { Container } from 'shared/components';
import s from './OrderFinished.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from 'shared/constants';
import { Picture } from 'shared/components';

//img import
import mob1_1x from 'modules/orderFinished/images/order1-1x.jpg';
import mob1_2x from 'modules/orderFinished/images/order1-2x.jpg';
import tabDeck2_1x from 'modules/orderFinished/images/order2-1x.jpg';
import tabDeck2_2x from 'modules/orderFinished/images/order2-2x.jpg';

const OrderFinished = () => {
  const [order] = useState({ number: 375 });

  return (
    <Container className={s.section}>
      <Link to={'/'} className={s.logo}>
        <Picture
          mob1x={mob1_1x}
          mob2x={mob1_2x}
          tab1x={tabDeck2_1x}
          tab2x={tabDeck2_2x}
          desk1x={tabDeck2_1x}
          desk2x={tabDeck2_2x}
          defaultImg={mob1_1x}
          width={343}
          alt="photo"
        />
      </Link>
      <h2 className={s.title}>Подякували!</h2>
      <p className={s.text}>
        Замовлення №{order.number} успішно оформлене. Ми відправили усю
        інформацію на вказану електронну адресу. Наші співробітники вже дбайливо
        збирають посилочку для Вас.
      </p>
      <Link className={s.linkButton} to={ROUTES.PRODUCTS}>
        І вам дякуємо
      </Link>
    </Container>
  );
};

export default OrderFinished;
