import { NavLink } from 'react-router-dom';
import s from './MobileNav.module.scss';
import ProductDropDown from '../ProductDropDown/ProductDropDown';
import { ROUTES } from 'shared/constants';

const MobileNav = () => {
  return (
    <ul className={s.mobileNavList}>
      <li className={s.mobileNavListItem}>
        <NavLink
          to={'/'}
          exact="true"
          className={({ isActive }) =>
            isActive ? s.activeNavLink : s.mobileNavLink
          }
        >
          Головна
        </NavLink>
      </li>
      <li className={s.mobileNavListItem}>
        <NavLink
          to={ROUTES.ABOUT}
          className={({ isActive }) =>
            isActive ? s.activeNavLink : s.mobileNavLink
          }
        >
          Про БрашБадді
        </NavLink>
      </li>

      <li className={s.mobileNavListItem}>
        <ProductDropDown />
      </li>
    </ul>
  );
};

export default MobileNav;
