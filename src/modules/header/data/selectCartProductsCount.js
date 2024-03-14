import { createSelector } from '@reduxjs/toolkit';

export const selectCartProductsCount = createSelector(
  (state) => state.cart.products,
  (products) => products.length
);
