import s from './FooterNav.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
const FooterNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <Link to="/" className={s.navListItemLink}>
            Головна
          </Link>
        </li>
        <li className={s.navListItem}>
          <Link to={ROUTES.ABOUT} className={s.navListItemLink}>
            Про БрашБадді
          </Link>
        </li>
        <li className={s.navListItem}>
          <Link to={ROUTES.PRODUCTS} className={s.navListItemLink}>
            Товари
          </Link>
        </li>
        <li className={s.navListItem}>
          <Link to={ROUTES.BLOG} className={s.navListItemLink}>
            Блог
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
