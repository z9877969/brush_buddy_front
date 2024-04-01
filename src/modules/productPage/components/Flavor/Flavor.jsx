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
        <span className={s.selectFlavorText}>{value.name}</span>
      </p>
      <ul className={s.mlBlock}>
        {productFlavours.map((item, i) => {
          return (
            <li
              key={i}
              className={clsx(
                s.item,
                item.colorMarker === value.colorMarker ? s.itemFocus : s.item
              )}
            >
              <label
                style={{ backgroundColor: item.colorMarker }}
                className={clsx(
                  s.labels,
                  productFlavours[i].inStock === true
                    ? s.labels
                    : s.disabledLabels
                )}
              >
                <input
                  className={s.radioBtn}
                  type="radio"
                  name="flavor"
                  value={item.colorMarker}
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
