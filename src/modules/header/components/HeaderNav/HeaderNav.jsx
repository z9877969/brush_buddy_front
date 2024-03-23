import { NavLink } from 'react-router-dom';
import s from './HeaderNav.module.scss';
import ProductDropDown from '../ProductDropDown/ProductDropDown';
import { ROUTES } from 'shared/constants';
import { scrollToTop } from 'helpers';

const HeaderNav = () => {
  return (
    <ul className={s.navList}>
      <li className={s.navListItem}>
        <NavLink
          to={'/'}
          exact="true"
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
          onClick={scrollToTop}
        >
          Головна
        </NavLink>
      </li>
      <li className={s.navListItem}>
        <NavLink
          to={ROUTES.ABOUT}
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
          onClick={scrollToTop}
        >
          Про БрашБадді
        </NavLink>
      </li>
      <li className={`${s.navListItem} ${s.navLink}`}>
        <ProductDropDown />
      </li>
    </ul>
  );
};

export default HeaderNav;
