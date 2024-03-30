import clsx from 'clsx';
import s from './Flavor.module.scss';

export const Flavor = ({ productFlavours, value, setFlavor, setQuantity }) => {
  const handleFlavorChange = (item) => {
    setFlavor(item);
    setQuantity(1);
  };
  return (
    <>
      <p className={s.mlText}>
        Виберіть смак:
        <span className={s.selectFlavorText}>{value.colorMarker}</span>
      </p>
      <ul className={s.mlBlock}>
        {productFlavours.map((item, i) => {
          return (
            <li
              key={i}
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
                  onChange={() => handleFlavorChange(item)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
