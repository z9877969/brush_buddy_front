import clsx from 'clsx';
import s from './Color.module.scss';

export const Color = ({ productColors, value, setColor }) => {
  return (
    <>
      <p className={s.colorText}>
        Виберіть колір: <span className={s.selectColorText}>{value.color}</span>
      </p>
      <ul className={s.colorBlock}>
        {productColors.map((item, i) => {
          return (
            <li
              key={i}
              className={clsx(
                s.item,
                item.color === value.color ? s.itemFocus : s.item
              )}
            >
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
