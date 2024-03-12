import { NavLink, useLocation } from 'react-router-dom';
import s from './HeaderNav.module.scss';
import ProductDropDown from '../ProductDropDown/ProductDropDown';
import { ROUTES } from 'shared/constants';

const HeaderNav = () => {
    const location = useLocation();
  
    return (
      <ul className={s.navList}>
        <li className={s.navListItem}>
            <NavLink to='/' exact="true" className={`${s.navLink} ${location.pathname === ROUTES.MAIN ? s.activeNavLink : ''}`}>
                Головна
            </NavLink>
        </li>
        <li className={s.navListItem}>
            <NavLink to={ROUTES.ABOUT} className={`${s.navLink} ${location.pathname === '/about' ? s.activeNavLink : ''}`}>
                Про БрашБаді
            </NavLink>
        </li>
        <li className={`${s.navListItem} ${s.navLink}`}>
          <ProductDropDown />
        </li>
      </ul>
    );
  };  

export default HeaderNav;
