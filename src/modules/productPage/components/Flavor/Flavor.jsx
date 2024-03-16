import { useState } from 'react';
import s from './Flavor.module.scss';

export const Flavor = ({ products, arr }) => {
  const flavors = arr.map((item) => item.flavors);
  const [flavor, setFlavor] = useState(flavors[0]);
  return (
    <>
      <p className={s.mlText}>
        Виберіть смак:
        <span className={s.selectFlavorText}>{flavor.flavor}</span>
      </p>
      <ul className={s.mlBlock}>
        {products.flavors.map((item) => {
          return (
            <li key={item.flavor} className={s.item}>
              <label
                style={{ backgroundColor: item.color }}
                className={s.labels}
              >
                <input
                  className={s.radioBtn}
                  type="radio"
                  name="flavor"
                  value={item.color}
                  onChange={() => setFlavor(item)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
