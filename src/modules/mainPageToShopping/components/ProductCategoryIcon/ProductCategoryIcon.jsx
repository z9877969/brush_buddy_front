import clsx from 'clsx';
import s from './ProductCategoryIcon.module.scss';

const ProductCategoryIcon = ({ category, age_range, sprite }) => {
  let categoryIcon = null;
  let subCatClass = null;
  const ageRangeIcon = 'icon-bage-adult';

  switch (category) {
    case 'adult':
      categoryIcon = 'icon-bage-adult';
      subCatClass = 'adult';
      break;
    case 'child':
      categoryIcon = 'icon-bage-child';
      subCatClass = 'child';
      break;
    case 'pet':
      categoryIcon = 'icon-bage-animal';
      subCatClass = 'pet';
      break;

    default:
      categoryIcon = 'not-found';
      break;
  }

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
