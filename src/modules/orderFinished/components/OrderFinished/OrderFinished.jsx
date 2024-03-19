import { Container, Logo } from 'shared/components';
import css from './OrderFinished.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from 'shared/constants';

const OrderFinished = () => {
  const [order] = useState({ number: 375 });

  return (
    <Container>
      <Logo className={css.logo} />
      <h2 className={css.title}>Подякували!</h2>
      <p className={css.text}>
        Замовлення №{order.number} успішно оформлене. Ми відправили усю
        інформацію на вказану електронну адресу. Наші співробітники вже дбайливо
        збирають посилочку для Вас.
      </p>
      <Link className={css.linkButton} to={ROUTES.PRODUCTS}>
        І вам дякуємо
      </Link>
    </Container>
  );
};

export default OrderFinished;
