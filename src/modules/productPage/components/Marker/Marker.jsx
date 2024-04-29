import clsx from 'clsx';
import s from './Marker.module.scss';

export const Marker = ({
  markers,
  handleChangeCurVar,
  value,
  // isSale = false,
  isAbsent = false,
}) => {
  return (
    <ul className={s.colorBlock}>
      {markers.map((marker, i) => {
        return (
          <li
            key={i}
            className={clsx(s.item, marker === value ? s.itemFocus : null)}
          >
            <label
              style={{ backgroundColor: marker }}
              className={clsx(s.labels, isAbsent ? s.disabledLabels : s.labels)}
            >
              <input
                className={s.radioBtn}
                type="radio"
                name="color"
                value={marker}
                onChange={() => handleChangeCurVar({ marker })}
                checked={marker === value}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};
