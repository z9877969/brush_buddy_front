import { Button } from 'shared/components';
import FilterItem from '../FilterItem/FilterItem';
import s from './SelectedFilters.module.scss';

const filters = [
  { id: 'abcd', filterName: 'adult' },
  { id: 'efgh', filterName: 'child' },
  { id: 'ijkl', filterName: 'animal' },
  { id: 'mnop', filterName: 'Colgate' },
  { id: 'qrst', filterName: 'Sensodyne' },
  { id: 'uvwx', filterName: 'Aquafresh' },
  { id: 'yzab', filterName: 'Oral-B' },
  { id: 'cdef', filterName: 'adult' },
  { id: 'ghij', filterName: 'child' },
  { id: 'klmn', filterName: 'animal' },
];

const SelectedFilters = () => {
  const elements = filters.map((filter) => (
    <FilterItem filterName={filter.filterName} key={filter.id} />
  ));
  return (
    <div className={s.filtersWrapper}>
      <ul className={s.filtersBlock}>{elements}</ul>
      <Button title={'Скинути усі фільтри'} className={s.resetBtn} />
    </div>
  );
};

export default SelectedFilters;
