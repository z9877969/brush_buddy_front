import { useState } from 'react';
import s from './Flavor.module.scss';

export const Flavor = ({ products, arr }) => {
  const flavors = arr.map((item) => item.flavors);
  const [flavor, setFlavor] = useState(flavors[0]);
  return (
    <>
      <p className={s.mlText}>Виберіть смак: {flavor.flavor}</p>
      <div className={s.mlBlock}>
        {products.flavors.map((item) => {
          return (
            <label className={s.labels} key={item.flavor}>
              <span className={s.ml} style={{ color: flavor }}>
                {item.color}
              </span>
              <input
                className={s.radioBtn}
                type="radio"
                name="flavor"
                value={item.color}
                onChange={() => setFlavor(item)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
