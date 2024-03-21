import clsx from 'clsx';
import s from './MainTitle.module.scss';

const MainTitle = ({ title, className, light, ...props }) => {
  return (
    <h2
      className={clsx(s.title, className && className, light && s.light)}
      {...props}
    >
      {title}
    </h2>
  );
};

export default MainTitle;
