import { useState } from 'react';
import s from './Color.module.scss';

export const Color = ({ products, arr }) => {
  const colors = arr.map((item) => item.colors);
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <p className={s.mlText}>Виберіть колір: {color.color}</p>
      <div className={s.mlBlock}>
        {products.colors.map((item) => {
          return (
            <label className={s.labels} key={item.color}>
              <span className={s.ml}>{item.color}</span>
              <input
                className={s.radioBtn}
                type="radio"
                name="color"
                value={item.color}
                onChange={() => setColor(item)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
