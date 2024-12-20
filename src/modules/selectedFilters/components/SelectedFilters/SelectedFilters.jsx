// import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
// import FilterItem from '../FilterItem/FilterItem';
import { Button } from 'shared/components';
import s from './SelectedFilters.module.scss';

// import { PRODUCT_TYPES } from 'shared/constants';
import { initialFilterValues } from 'modules/productsPageFilter';

// const recommended = {
//   [PRODUCT_TYPES.ADULT]: 'Для дорослих',
//   [PRODUCT_TYPES.ANIMAL]: 'Для тварин',
//   [PRODUCT_TYPES.CHILD]: 'Для дітей',
// };

const SelectedFilters = ({
  // filter,
  findedProductsLength,
  setFilter,
}) => {
  const navigate = useNavigate();

  const resetFilters = () => {
    setFilter(initialFilterValues);
    navigate({ page: 1 });
  };

  // const handleRemove = useCallback(
  //   ({ category, value, type }) => {
  //     if (type === 'check') {
  //       setFilter((p) => ({
  //         ...p,
  //         [category]: p[category].filter((el) => el !== value),
  //       }));
  //     } else {
  //       setFilter((p) => ({
  //         ...p,
  //         [category]: initialFilterValues[category],
  //       }));
  //     }
  //   },
  //   [setFilter]
  // );

  // const elements = useMemo(
  //   () =>
  //     Object.entries(filter)
  //       .flatMap(([key, data]) => {
  //         if (key === 'recommendedFor' && Array.isArray(data)) {
  //           return data.map((el) => ({
  //             category: key,
  //             value: el,
  //             label: recommended[el],
  //             type: 'check',
  //           }));
  //         }
  //         if (typeof data === 'string') {
  //           return data
  //             ? { category: key, value: key, label: data, type: 'search' }
  //             : [];
  //         }
  //         return data.value ? { ...data, category: key, type: 'option' } : [];
  //       })
  //       .map(({ category, value, label, type }) => (
  //         <FilterItem
  //           filterName={label}
  //           subClass={value}
  //           removeFilter={() => handleRemove({ category, type, value })}
  //           key={category + value}
  //         />
  //       )),
  //   [filter, handleRemove]
  // );

  return (
    <div className={s.filtersWrapper}>
      {/* <ul className={s.filtersBlock}>{elements}</ul> */}
      {findedProductsLength > 0 && (
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
