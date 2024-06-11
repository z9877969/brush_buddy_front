import clsx from 'clsx';
import s from './ProductMarkersList.module.scss';

const ProductMarkersList = ({ markers, changeColor, activeVar }) => {
  return (
    <ul className={s.colorBlock}>
      {markers.map((marker) => {
        return (
          <li
            key={marker}
            className={clsx(
              s.item,
              marker === activeVar.marker ? s.itemFocus : null
            )}
          >
            <label
              style={{ backgroundColor: marker }}
              className={clsx(
                s.labels,
                activeVar.quantity > 0 ? s.labels : s.disabledLabels
              )}
            >
              <input
                className={s.radioBtn}
                type="radio"
                name="color"
                value={marker}
                onChange={() => changeColor({ marker })}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductMarkersList;
