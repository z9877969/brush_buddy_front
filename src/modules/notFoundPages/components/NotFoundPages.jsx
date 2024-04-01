import { Container } from 'shared/components';
import s from './NotFoundPages.module.scss';
import { Link } from 'react-router-dom';
import { sprite } from 'shared/icons';
import Anima from '../images/Anima.gif';
import { ROUTES } from 'shared/constants';

const NotFoundPages = () => {
  return (
    <Container>
      <div className={s.container}>
        <img className={s.image} src={Anima} alt="not-found-pages" />
        <h2 className={s.title}> Цієї сторінkи більше немає, але є інші</h2>
        <div className={s.navigation}>
          <Link to="/" className={s.link}>
            На головну
          </Link>
          {/* <LinkButton className={s.productLink} title={'До покупок'} /> */}
          <Link to={`${ROUTES.PRODUCTS}?page=1`} className={s.productLink}>
            До поkупоk
            <svg>
              <use href={sprite + '#icon-arrow-right'}></use>
            </svg>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundPages;
