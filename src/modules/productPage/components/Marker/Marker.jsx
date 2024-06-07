import { useMemo } from 'react';
import clsx from 'clsx';
import s from './Marker.module.scss';

export const Marker = ({ curVariant, setMarker, variants }) => {
  const markersSelectors = useMemo(() => {
    const markers = variants.map((prodVar) => prodVar.marker);
    return [...new Set(markers)];
  }, [variants]);

  return (
    <ul className={s.colorBlock}>
      {markersSelectors.map((marker) => {
        return (
          <li
            key={marker}
            className={clsx(
              s.item,
              marker === curVariant.marker ? s.itemFocus : null
            )}
          >
            <label
              style={{ backgroundColor: marker }}
              className={clsx(
                s.labels,
                !curVariant.quantity ? s.disabledLabels : s.labels
              )}
            >
              <input
                className={s.radioBtn}
                type="radio"
                name="color"
                value={marker}
                onChange={() => setMarker(marker)}
                checked={marker === curVariant.value}
              />
            </label>
          </li>
        );
      })}
    </ul>
  );
};
