import clsx from 'clsx';
import s from './ProductCategoryIcon.module.scss';
import { PRODUCT_TYPES } from 'shared/constants';

const ProductCategoryIcon = ({ category, age_range, sprite }) => {
  const categoryIcons = {
    [PRODUCT_TYPES.ADULT]: { icon: 'icon-bage-adult', className: 'adult' },
    [PRODUCT_TYPES.CHILD]: { icon: 'icon-bage-child', className: 'child' },
    [PRODUCT_TYPES.ANIMAL]: { icon: 'icon-bage-animal', className: 'animal' },
  };

  const { icon: categoryIcon, className: subCatClass } = categoryIcons[
    category
  ] || { icon: null, className: null };
  const ageRangeIcon = 'icon-bage-adult';

  return (
    <div className={s.catIconWrapper}>
      {category && (
        <svg className={clsx(s.categoryIcon, s[subCatClass])}>
          <use href={`${sprite}#${categoryIcon}`}></use>
        </svg>
      )}
      {age_range && (
        <svg className={clsx(s.categoryIcon, s.adult)}>
          <use href={`${sprite}#${ageRangeIcon}`}></use>
        </svg>
      )}
    </div>
  );
};

export default ProductCategoryIcon;
