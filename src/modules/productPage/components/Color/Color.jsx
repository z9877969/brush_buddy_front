import { useState } from 'react';
import s from './Color.module.scss';

export const Color = ({ products, arr }) => {
  const colors = arr.map((item) => item.colors);
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <p className={s.colorText}>
        Виберіть колір: <span className={s.selectColorText}>{color.color}</span>
      </p>
      <ul className={s.colorBlock}>
        {products.colors.map((item) => {
          return (
            <li key={item.flavor} className={s.item}>
              <label
                style={{ backgroundColor: item.color }}
                className={s.labels}
              >
                <input
                  className={s.radioBtn}
                  type="radio"
                  name="color"
                  value={item.color}
                  onChange={() => setColor(item)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
