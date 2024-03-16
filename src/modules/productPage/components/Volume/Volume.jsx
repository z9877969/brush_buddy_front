import { useState } from 'react';
import s from './Volume.module.scss';

export const Volume = ({ products, arr }) => {
  const ml = arr.map((item) => item.litter);
  const [mls, setMl] = useState(ml[0]);

  return (
    <>
      <p className={s.mlText}>Об’єм: {mls.ml}</p>
      <div className={s.mlBlock}>
        {products.litter.map((item) => {
          return (
            <label className={s.labels} key={item.ml}>
              <span className={s.ml}>{item.ml}мл</span>
              <input
                className={s.radioBtn}
                type="radio"
                name="ml"
                value={item.ml}
                onChange={() => setMl(item)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
