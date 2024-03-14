import clsx from 'clsx';
import { sprite } from 'shared/icons';

const RoundButton = ({
  iconId,
  title,
  className,
  onClick = null,
  disabled = false,
}) => {
  return (
    <button
      className={clsx('button', className && className)}
      onClick={onClick}
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
