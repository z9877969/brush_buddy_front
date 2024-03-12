import { PRODUCT_TYPES } from 'shared/constants/index.js';

export const recommendedForOptions = [
  { value: PRODUCT_TYPES.ADULT, label: 'Дорослих' },
  { value: PRODUCT_TYPES.CHILD, label: 'Дітей' },
  { value: PRODUCT_TYPES.ANIMAL, label: 'Тварин' },
];
export const ageOptions = [
  { value: 'all', label: 'Усі' },
  { value: '0to3', label: '0-3 роки' },
  { value: '4to6', label: '4-6 років' },
  { value: '6to12', label: '6-12 років' },
];
export const categoriesOptions = [
  { value: 'toothbrushes', label: 'Зубні щітки (10)' },
  { value: 'toothpastes', label: 'Зубна паста (5)' },
  { value: 'brushheads', label: 'Насадки для щітки (5)' },
  { value: 'sets', label: 'Готові набори (0)' },
  { value: 'plaqueIndicators', label: 'Індикація нальоту (3)' },
  { value: 'interdentalCleaning', label: 'Міжзубне чищення (4)' },
  { value: 'goodies', label: 'Корисні смаколики (5)' },
  { value: 'helpers', label: 'Допомагайки (2)' },
];
export const brandsOptions = [
  { value: 'all', label: 'Усі' },
  { value: 'tello', label: 'TELLO' },
  { value: 'miradent', label: 'Miradent' },
  { value: 'dentek', label: 'DenTek' },
  { value: 'frezyderm', label: 'FrezyDerm' },
  { value: 'brushbaby', label: 'Brush-baby' },
  { value: 'herbadent', label: 'HERBADENT' },
  { value: 'nordics', label: 'Nordics' },
  { value: 'brushbuddy', label: 'BrushBuddy' },
];
