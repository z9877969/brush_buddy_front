export const selectCart = (store) => store.cart;
export const selectProd = (store) => store.cart.products;
export const selectTotalPrice = (store) => store.cart.totalPrice;
export const selectDiscount = (store) => store.cart.discount;
export const selectSubmitForm = (store) => store.cart.isSubmitForm;
