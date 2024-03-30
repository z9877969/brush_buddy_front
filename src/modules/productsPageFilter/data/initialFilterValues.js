import {
  ageOptions,
  brandsOptions,
  categoriesOptions,
  sortByOptions,
} from './options';

export const initialFilterValues = {
  search: '',
  recommendedFor: [],
  age: ageOptions[0],
  category: categoriesOptions({})[0],
  brand: brandsOptions[0],
  sortBy: sortByOptions[0],
};
