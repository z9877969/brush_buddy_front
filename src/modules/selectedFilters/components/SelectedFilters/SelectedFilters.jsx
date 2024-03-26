import { Button } from 'shared/components';
import FilterItem from '../FilterItem/FilterItem';
import s from './SelectedFilters.module.scss';

const SelectedFilters = ({ filter, setFilter }) => {
  const handleRemoveFilter = (filterName) => {
    const updatedFilter = { ...filter };
    delete updatedFilter[filterName];
    setFilter(updatedFilter);
  };

  const resetFilters = () => setFilter(null);

  const elements = Object.values(filter).flatMap((value) => {
    if (typeof value === 'object' && value.label) {
      return (
        <FilterItem
          filterName={value.label}
          key={value.label}
          removeFilter={handleRemoveFilter}
        />
      );
    } else if (Array.isArray(value)) {
      return value.map((item, index) => (
        <FilterItem
          filterName={item}
          key={index}
          removeFilter={handleRemoveFilter}
        />
      ));
    }
    return (
      <FilterItem
        filterName={value}
        key={value}
        removeFilter={handleRemoveFilter}
      />
    );
  });

  return (
    <div className={s.filtersWrapper}>
      <ul className={s.filtersBlock}>{elements}</ul>
      <Button
        title={'Скинути усі фільтри'}
        className={s.resetBtn}
        onClick={() => resetFilters()}
      />
    </div>
  );
};

export default SelectedFilters;
