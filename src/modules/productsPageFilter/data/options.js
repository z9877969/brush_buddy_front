import { PRODUCT_TYPES } from 'shared/constants/index.js';

export const recommendedForOptions = [
  { value: PRODUCT_TYPES.ADULT, label: 'Дорослих' },
  { value: PRODUCT_TYPES.CHILD, label: 'Дітей' },
  { value: PRODUCT_TYPES.ANIMAL, label: 'Тварин' },
];
export const ageOptions = [
  { value: null, label: 'Усі' },
  { value: '0to3', label: '0-3 роки' },
  { value: '4to6', label: '4-6 років' },
  { value: '6to12', label: '6-12 років' },
];

export const categoriesOptions = (options) => [
  { value: null, label: 'Усі' },
  {
    value: 'toothbrushes',
    label: `Зубні щітки (${options.toothbrushes !== undefined ? options.toothbrushes : 0})`,
  },
  {
    value: 'toothpastes',
    label: `Зубна паста (${options.toothpastes !== undefined ? options.toothpastes : 0})`,
  },
  {
    value: 'brushheads',
    label: `Насадки для щітки (${options.brushheads !== undefined ? options.brushheads : 0})`,
  },
  {
    value: 'sets',
    label: `Готові набори (${options.sets !== undefined ? options.sets : 0})`,
  },
  {
    value: 'plaqueIndicators',
    label: `Індикація нальоту (${options.plaqueIndicators !== undefined ? options.plaqueIndicators : 0})`,
  },
  {
    value: 'interdentalCleaning',
    label: `Міжзубне чищення (${options.interdentalCleaning !== undefined ? options.interdentalCleaning : 0})`,
  },
  {
    value: 'goodies',
    label: `Корисні смаколики (${options.goodies !== undefined ? options.goodies : 0})`,
  },
  {
    value: 'helpers',
    label: `Допомагайки (${options.helpers !== undefined ? options.helpers : 0})`,
  },
];
export const brandsOptions = [
  { value: null, label: 'Усі' },
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
  { value: null, label: 'Товари' },
  { value: 'increment', label: 'Ціна за зростанням' },
  { value: 'new', label: 'Новинки' },
  { value: 'actions', label: 'Акції' },
  { value: 'decrement', label: 'Ціна за спаданням' },
];
