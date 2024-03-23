import clsx from 'clsx';
import s from './Flavor.module.scss';

export const Flavor = ({ products, value, setFlavor }) => {
  return (
    <>
      <p className={s.mlText}>
        Виберіть смак:
        <span className={s.selectFlavorText}>{value.flavor}</span>
      </p>
      <ul className={s.mlBlock}>
        {products.flavors.map((item) => {
          return (
            <li
              key={item.flavor}
              className={clsx(
                s.item,
                item.flavor === value.flavor ? s.itemFocus : s.item
              )}
            >
              <label
                style={{ backgroundColor: item.colorMarker }}
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
