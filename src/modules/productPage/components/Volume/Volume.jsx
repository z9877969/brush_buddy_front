import clsx from 'clsx';
import s from './Volume.module.scss';

export const Volume = ({ productVolume, value, setMls, setQuantity }) => {
  const { name } = value;
  const handleVolumeChange = (item) => {
    setMls(item);
    setQuantity(1);
  };
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
                item.name === name ? s.labelsFocus : s.labels
              )}
            >
              <span className={s.ml}>{item.name}мл</span>
              <input
                className={s.radioBtn}
                type="radio"
                name="ml"
                value={item.name}
                checked={name === item.name}
                onChange={() => handleVolumeChange(item)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
