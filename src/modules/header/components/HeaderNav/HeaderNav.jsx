import { NavLink } from 'react-router-dom';
import s from './HeaderNav.module.scss';
import ProductDropDown from '../ProductDropDown/ProductDropDown';
import { ROUTES } from 'shared/constants';

const HeaderNav = ({ handleMenuToggle }) => {
  return (
    <ul className={s.navList}>
      <li className={s.navListItem}>
        <NavLink
          to={'/'}
          exact="true"
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
          onClick={handleMenuToggle}
        >
          Головна
        </NavLink>
      </li>
      <li className={s.navListItem}>
        <NavLink
          to={ROUTES.ABOUT}
          className={({ isActive }) => (isActive ? s.activeNavLink : s.navLink)}
          onClick={handleMenuToggle}
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
