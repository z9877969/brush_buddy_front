import clsx from 'clsx';
import s from './Volume.module.scss';

export const Volume = ({ productVolume, value, setMls }) => {
  return (
    <>
      <p className={s.mlText}>Об’єм: {value.ml}</p>
      <div className={s.mlBlock}>
        {productVolume.map((item, i) => {
          return (
            <label
              key={i}
              className={clsx(
                s.labels,
                item === value ? s.labelsFocus : s.labels
              )}
            >
              <span className={s.ml}>{item}мл</span>
              <input
                className={s.radioBtn}
                type="radio"
                name="ml"
                value={item}
                onChange={() => setMls(item)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
