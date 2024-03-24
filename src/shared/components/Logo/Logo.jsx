import { sprite } from 'shared/icons';
import s from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { scrollToTop } from 'helpers';

const Logo = () => {
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
