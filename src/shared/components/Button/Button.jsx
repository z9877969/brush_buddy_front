import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({ type = 'button', title, className, border }) => {
  return (
    <button
      type={type}
      className={clsx(s.button, className && className, border && s.border)}
    >
      {title}
    </button>
  );
};

export default Button;
