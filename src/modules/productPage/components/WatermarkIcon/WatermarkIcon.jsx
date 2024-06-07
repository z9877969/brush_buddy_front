import clsx from 'clsx';
import s from './WatermarkIcon.module.scss';
import { sprite } from 'shared/icons';

const WatermarkIcon = ({ watermark }) => {
  return (
    <div className={s.wrapper}>
      <svg className={clsx(s.switch, !watermark ? s.none : s[watermark])}>
        <use href={`${sprite}#icon-${watermark}`}></use>
      </svg>
    </div>
  );
};

export default WatermarkIcon;
