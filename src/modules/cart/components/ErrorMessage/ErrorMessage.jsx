import clsx from 'clsx';
import s from './ErrorMessage.module.scss';

const ErrorMessage = ({ touched, errorMessage, className }) => {
  return (
    touched &&
    errorMessage && (
      <div className={clsx(s.errorMessage, className && className)}>
        {errorMessage}
      </div>
    )
  );
};

export default ErrorMessage;
