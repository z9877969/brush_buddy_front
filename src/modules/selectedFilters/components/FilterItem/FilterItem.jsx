import { RoundButton } from 'shared/components';
import { PRODUCT_TYPES } from 'shared/constants';
import clsx from 'clsx';
import s from './FilterItem.module.scss';

const FilterItem = ({ filterName, removeFilter }) => {
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

  const isVisible = filterName && filterName !== 'search' && filterName.search;
  const isVisible2 =
    filterName && filterName !== 'Усі' && filterName !== 'Оберіть сортування';

  return (
    isVisible &&
    isVisible2 && (
      <li>
        <div className={clsx(s.filterBlock, subClass && s[subClass])}>
          {filterName}
          <RoundButton
            iconId={'icon-close-cross'}
            className={s.deleteBtn}
            onClick={() => removeFilter(filterName)}
          />
        </div>
      </li>
    )
  );
};

export default FilterItem;
