import { createSelector } from '@reduxjs/toolkit';

export const selectCart = (store) => store.cart;
export const selectProd = (store) => store.cart.products;
export const selectTotalPrice = (store) => store.cart.totalPrice;
export const selectDiscount = (store) => store.cart.discount;
export const selectSubmitForm = (store) => store.cart.submitForm;
export const isLoading = (store) => store.cart.isLoading;
export const selectDiscountPersentage = (store) =>
  store.cart.discountPercentage;
export const selectPromocode = (state) => state.cart.promoCode;
export const selectCartProducts = (state) => state.cart.products;

export const selectCartProductsRecomendations = createSelector(
  [selectCartProducts],
  // eslint-disable-next-line
  (products) => {
    const recommendation = ['adults', 'child'];
    return recommendation;
  }
);
