import clsx from 'clsx';
import s from './MainTitle.module.scss';

const MainTitle = ({ title, className }) => {
  return <h2 className={clsx(s.title, className && className)}>{title}</h2>;
};

export default MainTitle;
