import clsx from 'clsx';
import s from './ProductMarkersList.module.scss';

const ProductMarkersList = ({ markers, changeColor, active }) => {
  return (
    <ul className={s.colorBlock}>
      {markers.map(({ marker, varId }) => {
        return (
          <li
            key={varId}
            className={clsx(
              s.item,
              marker === active.marker ? s.itemFocus : null
            )}
          >
            <label
              style={{ backgroundColor: marker }}
              className={clsx(
                s.labels
                // markers[i].inStock === true ? s.labels : s.disabledLabels
              )}
            >
              <input
                className={s.radioBtn}
                type="radio"
                name="color"
                value={marker}
                onChange={() => changeColor({ varId, marker })}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductMarkersList;
