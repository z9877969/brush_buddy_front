import clsx from 'clsx';
import { sprite } from 'shared/icons';
import s from './RoundButton.module.scss';

const RoundButton = ({ 
  onClick = null,
  type = 'button',
  iconId,
  title,
  className,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick} 
      className={clsx(s.roundButton, className && className)}
      disabled={disabled}
    >
      {iconId ? (
        <svg>
          <use href={sprite + '#' + iconId}></use>
        </svg>
      ) : (
        title
      )}
    </button>
  );
};

export default RoundButton;
