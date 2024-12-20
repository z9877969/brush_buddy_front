import { createSelector } from '@reduxjs/toolkit';

export const selectProductsList = (state) => state.products.list;

export const selectHelpersProduct = createSelector(
  selectProductsList,
  (products) => {
    return products.filter((el) => el.category.value === 'helpers');
  }
);
