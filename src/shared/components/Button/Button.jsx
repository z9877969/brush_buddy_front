import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({ type = 'button', title, className, border, ...rest }) => {
  return (
    <button
      type={type}
      className={clsx(s.button, className && className, border && s.border)}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
