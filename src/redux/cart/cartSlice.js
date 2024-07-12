import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { totalPrice, totalPriceDiscount } from 'modules/cart';
import { checkPromoCode, sendOrderData } from './operationsCart.js';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    totalPrice: 0,
    promoCode: null,
    discount: 0,
    discountPercentage: 0,
    isLoading: false,
    error: null,
    submitForm: false,
    orderResult: null,
  },
  reducers: {
    addProduct(state, { payload }) {
      state.submitForm = false;
      const { id, price, salePrice } = payload;
      const productIdx = state.products.findIndex((el) => el.id === id);
      const curPrice = salePrice > 0 ? salePrice : price;
      if (productIdx === -1) {
        state.products.push({ ...payload, amount: 1 });
      } else {
        state.products[productIdx].amount += 1;
      }
      state.totalPrice += curPrice;
      if (state.discountPercentage) {
        state.discount = Math.round(
          state.totalPrice * (1 - state.discountPercentage)
        );
      }
    },
    changeProductAmount(state, { payload }) {
      const { id, amount, price, salePrice } = payload;
      const productIdx = state.products.findIndex(
        (product) => product.id === id
      );
      const curPrice = salePrice > 0 ? salePrice : price;

      if (productIdx === -1) {
        state.products.push(payload);
        state.totalPrice += amount * curPrice;
      } else {
        const curProduct = state.products[productIdx];
        const { price, salePrice } = curProduct;
        const oldPrice = salePrice || price;
        if (amount > 0) {
          state.totalPrice =
            state.totalPrice - curProduct.amount * oldPrice + amount * curPrice;
          state.products[productIdx].amount = amount;
        } else {
          state.products.splice(productIdx, 1);
          state.totalPrice -= curProduct.amount * oldPrice;
        }
      }
      if (state.discountPercentage) {
        state.discount = Math.round(
          state.totalPrice * (1 - state.discountPercentage)
        );
      }
    },
    calcTotalPrice(state) {
      state.totalPrice = totalPrice(state.products);
    },
    resetOrderResult(state) {
      state.orderResult = null;
    },
    notUsedPromoCode(state) {
      state.promoCode = null;
      state.discountPercentage = 0;
      state.discount = 0;
    },
    submitForm(state, action) {
      state.submitForm = action.payload;
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(checkPromoCode.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkPromoCode.fulfilled, (state, { meta, payload }) => {
        state.isLoading = false;
        const promoCode = meta.arg.values.promoCode;
        state.promoCode = promoCode;
        let total = payload.total;
        const promoCodeDiscount = payload.discount;
        state.discountPercentage = promoCodeDiscount;
        state.discount = totalPriceDiscount(total, promoCodeDiscount);
      })
      .addCase(checkPromoCode.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(sendOrderData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOrderData.fulfilled, (state, { payload }) => {
        state.products = [];
        state.totalPrice = 0;
        state.promoCode = null;
        state.discount = 0;
        state.isLoading = false;
        state.error = null;
        state.submitForm = true;
        state.orderResult = payload;
      })
      .addCase(sendOrderData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.submitForm = false;
        state.error = payload;
      }),
});

export const {
  addProduct,
  changeProductAmount,
  calcTotalPrice,
  resetOrderResult,
  usedPromoCode,
  notUsedPromoCode,
  submitForm,
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
