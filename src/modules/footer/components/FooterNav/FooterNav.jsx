import s from './FooterNav.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import { scrollToTop } from 'helpers';

const FooterNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <Link to="/" className={s.navListItemLink} onClick={scrollToTop}>
            Головна
          </Link>
        </li>
        <li className={s.navListItem}>
          <Link
            to={ROUTES.ABOUT}
            className={s.navListItemLink}
            onClick={scrollToTop}
          >
            Про БрашБадді
          </Link>
        </li>
        <li className={s.navListItem}>
          <Link
            to={ROUTES.PRODUCTS}
            className={s.navListItemLink}
            onClick={scrollToTop}
          >
            Товари
          </Link>
        </li>
        <li className={s.navListItem}>
          <Link
            to={ROUTES.BLOG}
            className={s.navListItemLink}
            onClick={scrollToTop}
          >
            Блог
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
