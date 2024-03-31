import { Link } from 'react-router-dom';
import { Container } from 'shared/components';
import { ROUTES } from 'shared/constants';
import { animation } from '../../images';
import s from './OrderFinished.module.scss';

const OrderFinished = ({ orderNum }) => {
  return (
    <>
      <Container className={s.section}>
        <div className={s.animaContent}>
          <img src={animation} alt="animation" className={s.animation} />
        </div>
        <h2 className={s.title}>Подякували!</h2>
        <p className={s.text}>
          Замовлення №{orderNum} успішно оформлене. Ми відправили усю інформацію
          на вказану електронну адресу. Наші співробітники вже дбайливо збирають
          посилочку для Вас.
        </p>
        <Link className={s.linkButton} to={`${ROUTES.PRODUCTS}?page=1`}>
          І вам дякуємо
        </Link>
      </Container>
    </>
  );
};

export default OrderFinished;
