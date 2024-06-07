import { useMemo } from 'react';
import clsx from 'clsx';
import s from './Volume.module.scss';

export const Volume = ({ curVariant, variants, setVolume }) => {
  const volumesSelectors = useMemo(() => {
    const volumes = variants
      .filter((el) => el.marker === curVariant.marker)
      .map((prodVar) => prodVar.volume);
    return [...new Set(volumes)];
  }, [variants, curVariant]);

  return (
    <>
      <p className={s.mlText}>Об’єм: {curVariant.volume}</p>
      <div className={s.mlBlock}>
        {volumesSelectors.map((volume, i) => {
          return (
            <label
              key={i}
              className={clsx(
                s.labels,
                volume === curVariant.volume ? s.labelsFocus : s.labels
              )}
            >
              <span className={s.ml}>{volume}</span>
              <input
                className={s.radioBtn}
                type="radio"
                name="ml"
                value={volume}
                checked={curVariant.volume === volume}
                onChange={() => setVolume(volume)}
              />
            </label>
          );
        })}
      </div>
    </>
  );
};
