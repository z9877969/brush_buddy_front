import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { totalPrice, totalPriceDiscount } from 'modules/cart';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalPrice: 0,
    promoCode: null,
    discount: 0,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.totalPrice = totalPrice(state.products);
    },
    changeProductAmount(state, action) {
      const { id, quantity, flavor, volume, color, newCount } = action.payload;

      const productIndex = state.products.findIndex((product) => {
        if (product.id === id) {
          if (
            product.flavors &&
            product.flavors.flavor === flavor &&
            product.volume === volume
          ) {
            return true;
          }
          if (product.colors && product.colors.color === color) {
            return true;
          }
        }

        return false;
      });

      if (productIndex !== -1) {
        state.products[productIndex].amount = newCount;
        state.products[productIndex].isDisabledIncrement =
          newCount === quantity;
      }
      state.totalPrice = totalPrice(state.products);
      if (state.promoCode !== null) {
        state.discount = totalPriceDiscount(state.totalPrice);
      }
    },
    addTotalPrice(state) {
      state.totalPrice = totalPrice(state.products);
    },
    usedPromoCode(state, action) {
      const { values, total } = action.payload;
      const { promoCode } = values;
      state.promoCode = promoCode;
      state.discount = totalPriceDiscount(total);
    },
    notUsedPromoCode(state) {
      state.promoCode = null;
      state.discount = 0;
    },
  },
  extraReducers: (builder) => builder,
});

export const {
  addProduct,
  removeProduct,
  changeProductAmount,
  addTotalPrice,
  usedPromoCode,
  notUsedPromoCode,
} = cartSlice.actions;

const cartPersistConfig = {
  key: 'cart',
  storage,
  // blacklist: ['products'],
  whitelist: ['products'],
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);
