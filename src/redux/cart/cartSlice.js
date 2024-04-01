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
  },
  reducers: {
    addProduct(state, action) {
      state.submitForm = false;
      const { id, category, flavor, volume, color, amount } = action.payload;
      //знаходимо індекс товару(перевірка на наявність в корзині)
      const existingProductIndex = state.products.findIndex((product) => {
        if (flavor && volume) {
          return (
            product.id === id &&
            product.flavor === flavor &&
            product.volume === volume
          );
        } else if (color) {
          return product.id === id && product.color === color;
        } else if (category) {
          return product.id === id && product.category === category;
        } else if (volume) {
          return product.id === id && product.volume === volume;
        } else {
          return product.id === id;
        }
      });

      if (existingProductIndex !== -1) {
        // якщо товар вже існує, викликаємо changeProductAmount
        const existingProduct = state.products[existingProductIndex];
        let newCount;

        // чи передано нове значення amount
        if (amount !== undefined) {
          // сума існуючого amount та переданого amount більше за quantity
          if (existingProduct.amount + amount > existingProduct.quantity) {
            newCount = existingProduct.quantity;
          } else {
            newCount = existingProduct.amount + amount;
          }
        } else {
          // amount не передано
          if (existingProduct.amount + 1 > existingProduct.quantity) {
            newCount = existingProduct.quantity;
          } else {
            newCount = existingProduct.amount + 1;
          }
        }

        state.products[existingProductIndex].amount = newCount;
        state.products[existingProductIndex].isDisabledIncrement =
          newCount === existingProduct.quantity;
      } else {
        // якщо товару ще немає, додаємо його
        state.products.push({
          ...action.payload,
          amount: amount !== undefined ? amount : 1,
          isDisabledIncrement:
            amount !== undefined ? amount === action.payload.quantity : false,
        });
      }

      state.totalPrice = totalPrice(state.products);
    },

    removeProduct(state, action) {
      const { id, category, flavor, volume, color } = action.payload;
      state.products = state.products.filter(
        (product) =>
          product.id !== id ||
          (product.flavor !== flavor && product.volume !== volume) ||
          product.color !== color ||
          product.category !== category ||
          product.flavor !== flavor
      );
      state.totalPrice = totalPrice(state.products);
      const total = state.totalPrice;
      const promoCodeDiscount = state.discountPercentage
        ? state.discountPercentage
        : 0;
      state.discount = totalPriceDiscount(total, promoCodeDiscount);
    },
    changeProductAmount(state, action) {
      const { id, category, quantity, flavor, volume, color, newCount } =
        action.payload;
      const productIndex = state.products.findIndex((product) => {
        if (flavor && volume) {
          // Якщо є flavors
          return (
            product.id === id &&
            product.flavor === flavor &&
            product.volume === volume
          );
        } else if (color) {
          // Якщо є colors
          return product.id === id && product.color === color;
        } else if (category) {
          //якщо є only flavor
          return product.id === id && product.category === category;
        } else if (flavor) {
          // Якщо є colors
          return product.id === id && product.flavor === flavor;
        } else {
          return product.id === id;
        }
      });
      if (productIndex !== -1) {
        state.products[productIndex].amount = newCount;
        state.products[productIndex].isDisabledIncrement =
          newCount === quantity;
      }
      state.totalPrice = totalPrice(state.products);
      if (state.promoCode !== null) {
        const total = state.totalPrice;
        const promoCodeDiscount = state.discountPercentage;
        state.discount = totalPriceDiscount(total, promoCodeDiscount);
      }
    },
    addTotalPrice(state, action) {
      state.totalPrice = totalPrice(action.payload);
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
      .addCase(sendOrderData.fulfilled, (state) => {
        state.products = [];
        state.totalPrice = 0;
        state.promoCode = null;
        state.discount = 0;
        state.isLoading = false;
        state.error = null;
        state.submitForm = true;
      })
      .addCase(sendOrderData.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.submitForm = false;
        state.error = payload;
      }),
});

export const {
  addProduct,
  removeProduct,
  changeProductAmount,
  addTotalPrice,
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
