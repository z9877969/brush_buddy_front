import { useMemo } from 'react';
import clsx from 'clsx';
import s from './ProductStatusIcon.module.scss';

const ProductStatusIcon = ({ status, sprite }) => {
  // let statusIcon = null;

  const statusIcon = useMemo(() => {
    switch (status) {
      case 'novently':
        return 'icon-wow';
      case 'sale':
        return 'icon-sale';

      default:
        return null;
    }
  }, [status]);

  return statusIcon ? (
    <svg
      className={clsx(
        s.statusIcon,
        status === 'sale' && s.iconSale,
        status === 'novently' && s.iconNovently
      )}
    >
      <use href={`${sprite}#${statusIcon}`} />
    </svg>
  ) : null;
};

export default ProductStatusIcon;
