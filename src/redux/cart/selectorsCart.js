export const selectCart = (store) => store.cart;
export const selectProd = (store) => store.cart.products;
export const selectTotalPrice = (store) => store.cart.totalPrice;
export const selectDiscount = (store) => store.cart.discount;
export const selectSubmitForm = (store) => store.cart.submitForm;
export const isLoading = (store) => store.cart.isLoading;
export const selectDiscountValue = (store) => store.cart.discountValue;
export const selectPromocode = (state) => state.cart.promoCode;
