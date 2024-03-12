import { sprite } from 'shared/icons';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={s.logo}>
      <svg>
        <use href={sprite + '#icon-logo'}></use>
      </svg>
    </div>
  );
};

export default Logo;
