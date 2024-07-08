import clsx from 'clsx';
import s from './WatermarkIcon.module.scss';
import { sprite } from 'shared/icons';

const WatermarkIcon = ({ watermark, iconClass }) => {
  return (
    <div className={s.wrapper}>
      <svg
        className={clsx(
          s.switch,
          !watermark ? s.none : s[watermark],
          iconClass && iconClass
        )}
      >
        <use href={`${sprite}#icon-${watermark}`}></use>
      </svg>
    </div>
  );
};

export default WatermarkIcon;
