import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { sprite } from 'shared/icons';
import s from './LinkButton.module.scss';

const LinkButton = ({ title, className, to }) => {
  return (
    <Link to={to} className={clsx(s.link, className && className)}>
      {title}
      <svg>
        <use href={sprite + '#icon-arrow-right'}></use>
      </svg>
    </Link>
  );
};

export default LinkButton;
