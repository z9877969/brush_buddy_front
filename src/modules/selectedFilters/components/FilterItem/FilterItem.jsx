import { RoundButton } from 'shared/components';
import { PRODUCT_TYPES } from 'shared/constants';
import clsx from 'clsx';
import s from './FilterItem.module.scss';

const FilterItem = ({ filterName }) => {
  let subClass = null;

  switch (filterName) {
    case PRODUCT_TYPES.ADULT:
      subClass = 'adult';
      break;
    case PRODUCT_TYPES.CHILD:
      subClass = 'child';
      break;
    case PRODUCT_TYPES.ANIMAL:
      subClass = 'animal';
      break;
    default:
      subClass = null;
      break;
  }
  return (
    <li>
      <div className={clsx(s.filterBlock, subClass && s[subClass])}>
        {filterName}
        <RoundButton iconId={'icon-close-cross'} className={s.deleteBtn} />
      </div>
    </li>
  );
};

export default FilterItem;
