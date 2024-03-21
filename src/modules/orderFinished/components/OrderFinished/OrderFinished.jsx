import { Container } from 'shared/components';
import s from './OrderFinished.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from 'shared/constants';
import { animation } from 'modules/orderFinished/images';

const OrderFinished = () => {
  const [order] = useState({ number: 375 });

  return (
    <Container className={s.section}>
      <img src={animation} alt="animation" className={s.animation} />

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
