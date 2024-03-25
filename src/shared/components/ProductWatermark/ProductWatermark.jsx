import { useMemo } from 'react';
import clsx from 'clsx';
import s from './ProductWatermark.module.scss';

const ProductWatermark = ({ watermark, sprite }) => {
  const watermarkIcon = useMemo(() => {
    switch (watermark) {
      case 'wow':
        return 'icon-wow';
      case 'sale':
        return 'icon-sale';

      default:
        return null;
    }
  }, [watermark]);

  return watermarkIcon ? (
    <svg
      className={clsx(
        s.watermarkIcon,
        watermark === 'sale' && s.iconSale,
        watermark === 'wow' && s.iconWow
      )}
    >
      <use href={`${sprite}#${watermarkIcon}`} />
    </svg>
  ) : null;
};

export default ProductWatermark;
