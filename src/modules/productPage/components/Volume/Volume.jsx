import s from './Volume.module.scss';

export const Volume = ({ products, value, setMls }) => {
  return (
    <>
      <p className={s.mlText}>Об’єм: {value.ml}</p>
      <div className={s.mlBlock}>
        {products.volume.map((item) => {
          return (
            <label className={s.labels} key={item}>
              <span className={s.ml}>{item}мл</span>
              <input
                className={s.radioBtn}
                type="radio"
                name="ml"
                value={item.ml}
                onChange={() => setMls(item)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
