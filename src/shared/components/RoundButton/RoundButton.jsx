import clsx from 'clsx';
import { sprite } from 'shared/icons';

const RoundButton = ({ iconId, title, className }) => {
  return (
    <button className={clsx('button', className && className)}>
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
