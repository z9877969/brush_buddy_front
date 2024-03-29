import { nanoid } from 'nanoid';
import { Button } from 'shared/components';
import FilterItem from '../FilterItem/FilterItem';
import s from './SelectedFilters.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'shared/constants';

const SelectedFilters = ({ filter, setFilter }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAllNullValues = (obj) => {
      for (const key in obj) {
        if (
          obj[key] !== null &&
          obj[key] !== undefined &&
          typeof obj[key] === 'object'
        ) {
          if (!checkAllNullValues(obj[key])) {
            return false;
          }
        } else if (obj[key] !== null && obj[key] !== undefined) {
          return false;
        } else if (
          key === 'value' &&
          obj['value'] === null &&
          obj['value'] === undefined
        ) {
          setFilter(null);
          navigate(ROUTES.PRODUCTS);
        }
      }
      return true;
    };

    if (checkAllNullValues(filter)) {
      setFilter(null);
      navigate(ROUTES.PRODUCTS);
    }
  }, [filter, setFilter, navigate]);

  const handleRemoveFilter = (filterValue) => {
    const updatedFilter = { ...filter };
    Object.keys(updatedFilter).forEach((key) => {
      if (Array.isArray(updatedFilter[key])) {
        updatedFilter[key] = updatedFilter[key].filter(
          (item) => item !== filterValue
        );
        if (updatedFilter[key].length === 0) {
          delete updatedFilter[key];
        }
      } else if (
        typeof updatedFilter[key] === 'object' &&
        updatedFilter[key] !== null &&
        updatedFilter[key].label === filterValue
      ) {
        delete updatedFilter[key];
      } else if (key === 'search' && updatedFilter[key] === filterValue) {
        delete updatedFilter[key];
      }
    });

    setFilter(updatedFilter);
  };

  const resetFilters = () => setFilter(null);
  const verifyValue = (value) => {
    const invalidValues = [null, 'Усі', 'Оберіть'];
    return !invalidValues.includes(value);
  };

  const elements = Object.values(filter).flatMap((value) => {
    if (
      typeof value === 'object' &&
      value &&
      value.value &&
      verifyValue(value.value) &&
      value.label
    ) {
      return (
        <FilterItem
          filterName={value.label}
          removeFilter={handleRemoveFilter}
          key={nanoid(4)}
        />
      );
    } else if (Array.isArray(value)) {
      return value.map((item) => (
        <FilterItem
          filterName={item}
          removeFilter={handleRemoveFilter}
          key={nanoid(5)}
        />
      ));
    }
    return (
      <FilterItem
        filterName={value}
        removeFilter={handleRemoveFilter}
        key={nanoid(6)}
      />
    );
  });

  return (
    <div className={s.filtersWrapper}>
      <ul className={s.filtersBlock}>{elements}</ul>
      {filter && (
        <Button
          title={'Скинути усі фільтри'}
          className={s.resetBtn}
          onClick={() => resetFilters()}
        />
      )}
    </div>
  );
};

export default SelectedFilters;
