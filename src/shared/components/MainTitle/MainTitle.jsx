import clsx from 'clsx';
import s from './MainTitle.module.scss';

const MainTitle = ({ title, className, light }) => {
  return (
    <h2 className={clsx(s.title, className && className, light && s.light)}>
      {title}
    </h2>
  );
};

export default MainTitle;
