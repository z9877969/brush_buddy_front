import clsx from 'clsx';
import s from './ProductTypeIcon.module.scss';
import { PRODUCT_TYPES } from 'shared/constants';

const ProductTypeIcon = ({ type, sprite }) => {
  const typeIcons = {
    [PRODUCT_TYPES.ADULT]: { icon: 'icon-bage-adult', className: 'adult' },
    [PRODUCT_TYPES.CHILD]: { icon: 'icon-bage-child', className: 'child' },
    [PRODUCT_TYPES.ANIMAL]: { icon: 'icon-bage-animal', className: 'animal' },
  };

  const renderTypeIcons = () => {
    return type.map((item, index) => {
      const { icon: typeIcon, className: subTypeClass } = typeIcons[item] || {
        icon: null,
        className: null,
      };
      return (
        <svg className={clsx(s.typeIcon, s[subTypeClass])} key={index}>
          <use href={`${sprite}#${typeIcon}`}></use>
        </svg>
      );
    });
  };

  return <div className={s.typeIconWrapper}>{renderTypeIcons()}</div>;
};

export default ProductTypeIcon;
