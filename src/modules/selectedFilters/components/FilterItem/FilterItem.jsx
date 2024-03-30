import clsx from 'clsx';
import { RoundButton } from 'shared/components';
import s from './FilterItem.module.scss';

const FilterItem = ({ filterName, removeFilter, subClass }) => {
  return (
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
  );
  // );
};

export default FilterItem;
