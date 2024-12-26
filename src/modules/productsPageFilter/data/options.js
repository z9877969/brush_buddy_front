import { PRODUCT_TYPES } from 'shared/constants/index.js';

export const recommendedForOptions = [
  { value: PRODUCT_TYPES.ADULT, label: 'Дорослих' },
  { value: PRODUCT_TYPES.CHILD, label: 'Дітей' },
  { value: PRODUCT_TYPES.ANIMAL, label: 'Тварин' },
];

export const sortingTypesDict = {
  DEFAULT: { value: null, label: 'Популярні' },
  PRICE_ASC: { value: 'increment', label: 'Ціна за зростанням' },
  PRICE_DESC: { value: 'decrement', label: 'Ціна за спаданням' },
  ALPH_ASC: { value: 'alph-asc', label: 'Від А до Я' },
  ALPH_DESC: { value: 'alph-desc', label: 'Від Я до А' },
};

export const ageOptions = [
  // { value: null, label: 'Усі' },
  { value: '0to3', label: '0-3 роки' },
  { value: '4to6', label: '4-6 років' },
  { value: '6to12', label: '6-12 років' },
];

export const categoriesOptions = (options) => [
  // { value: null, label: 'Усі' },
  {
    value: 'toothbrushes',
    label: `Зубні щітки (${options.toothbrushes || 0})`,
  },
  {
    value: 'toothpastes',
    label: `Зубна паста (${options.toothpastes || 0})`,
  },
  {
    value: 'brushheads',
    label: `Насадки для щітки (${options.brushheads || 0})`,
  },
  {
    value: 'sets',
    label: `Готові набори (${options.sets || 0})`,
  },
  {
    value: 'plaqueIndicators',
    label: `Індикація нальоту (${options.plaqueIndicators || 0})`,
  },
  {
    value: 'interdentalCleaning',
    label: `Міжзубне чищення (${options.interdentalCleaning || 0})`,
  },
  {
    value: 'goodies',
    label: `Корисні смаколики (${options.goodies || 0})`,
  },
  {
    value: 'helpers',
    label: `Допомагайки (${options.helpers || 0})`,
  },
];
export const brandsOptions = [
  // { value: null, label: 'Усі' },
  { value: 'tello', label: 'TELLO' },
  { value: 'miradent', label: 'Miradent' },
  { value: 'dentek', label: 'DenTek' },
  { value: 'frezyderm', label: 'FrezyDerm' },
  { value: 'brushbaby', label: 'Brush-baby' },
  { value: 'herbadent', label: 'HERBADENT' },
  { value: 'nordics', label: 'Nordics' },
  { value: 'brushbuddy', label: 'BrushBuddy' },
];
export const sortByOptions = [
  sortingTypesDict.DEFAULT,
  sortingTypesDict.PRICE_ASC,
  sortingTypesDict.PRICE_DESC,
  sortingTypesDict.ALPH_ASC,
  sortingTypesDict.ALPH_DESC,
];
