import clsx from 'clsx';
import s from './ProductStatusIcon.module.scss';

const ProductStatusIcon = ({ status, sprite }) => {
  let statusIcon = null;

  switch (status) {
    case 'novently':
      statusIcon = 'icon-wow';
      break;
    case 'sale':
      statusIcon = 'icon-sale';
      break;

    default:
      statusIcon = null;
      break;
  }

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
