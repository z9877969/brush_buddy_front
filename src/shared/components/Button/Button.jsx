import clsx from 'clsx';
import s from './Button.module.scss';

const Button = ({
  type = 'button',
  title,
  className,
  border,
  onClick,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s.button, className && className, border && s.border)}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
