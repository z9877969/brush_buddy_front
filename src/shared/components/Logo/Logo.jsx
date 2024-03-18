import { sprite } from 'shared/icons';
import s from './Logo.module.scss';

import { Link } from 'react-router-dom';
const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className={s.logo}>
      <Link to="/" className={s.logoLink} onClick={scrollToTop}>
        <svg>
          <use href={sprite + '#icon-logo'}></use>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
