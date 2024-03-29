import { RoundButton } from 'shared/components';
import { PRODUCT_TYPES } from 'shared/constants';
import clsx from 'clsx';
import s from './FilterItem.module.scss';

const FilterItem = ({ filterName, removeFilter }) => {
  let nameToShow = null;
  let subClass = null;

  if (
    filterName === PRODUCT_TYPES.ADULT ||
    filterName === PRODUCT_TYPES.ANIMAL ||
    filterName === PRODUCT_TYPES.CHILD
  ) {
    const filterNames = {
      child: 'Для дітей',
      adult: 'Для дорослих',
      animal: 'Для тварин',
    };
    nameToShow = filterNames[filterName];
    subClass = filterName;
  }

  const isVisible = filterName && filterName !== 'search' && filterName.search;

  return (
    isVisible && (
      <li>
        <div className={clsx(s.filterBlock, subClass && s[subClass])}>
          {nameToShow ? nameToShow : filterName}
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
