import s from './HeaderNav.module.scss'
import ProductDropDown from '../ProductDropDown/ProductDropDown';
import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants';

const HeaderNav = () => {
    return(
        <ul className={s.navList}>
            <li className={s.navListItem}>
                <Link className={s.navLink} to="/">Головна</Link>
            </li>
            <li className={s.navListItem}>
                <Link className={s.navLink} to={ROUTES.ABOUT}>Про БрашБаді</Link>
            </li>
            <li className={s.navListItem}>
                <ProductDropDown />
            </li>
        </ul>
    );
}

export default HeaderNav;