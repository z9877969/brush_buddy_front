import clsx from 'clsx';
import { sprite } from 'shared/icons';
import s from './RoundButton.module.scss';

const RoundButton = ({
  onClick = null,
  type = 'button',
  iconId,
  title,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick} 
      className={clsx(s.roundButton, className && className)}
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
