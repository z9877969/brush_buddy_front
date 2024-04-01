import clsx from 'clsx';
import s from './Color.module.scss';

export const Color = ({ productColors, value, setColor, setQuantity }) => {
  const { color: colorMarker, name: colorName } = value;

  const handleColorChange = (item) => {
    setColor(item);
    setQuantity(1);
  };
  return (
    <>
      <p className={s.colorText}>
        Виберіть колір: <span className={s.selectColorText}>{colorName}</span>
      </p>
      <ul className={s.colorBlock}>
        {productColors.map((item, i) => {
          return (
            <li
              key={i}
              className={clsx(
                s.item,
                item.color === colorMarker ? s.itemFocus : null
              )}
            >
              <label
                style={{ backgroundColor: item.color }}
                className={clsx(
                  s.labels,
                  productColors[i].inStock === true
                    ? s.labels
                    : s.disabledLabels
                )}
              >
                <input
                  className={s.radioBtn}
                  type="radio"
                  name="color"
                  value={item.color}
                  onChange={() => handleColorChange(item)}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};
