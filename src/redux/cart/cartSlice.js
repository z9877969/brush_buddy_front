import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { totalPrice, totalPriceDiscount } from 'modules/cart';
import { checkPromoCode } from './operationsCart.js';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      {
        id: '45cf',
        images:
          'https://cdn11.bigcommerce.com/s-a8e5b/images/stencil/1280x1280/products/3322/3847/Edel_White_Ultrasoft_Flosser_Toothbrush_2_pack_swiss_made__66902.1616093153.jpg?c=2?imbypass=on',
        title:
          'Відбілювальна зубна паста Curaprox Be You Candy Lover Toothpaste',
        price: 288.8,
        salePrice: 188.8,
        flavor: 'Яблуко',
        colorMarker: 'green',
        quantity: 5,
        volume: '50',
      },
      {
        id: '45dd',
        images:
          'https://cdn11.bigcommerce.com/s-a8e5b/images/stencil/1280x1280/products/3322/3847/Edel_White_Ultrasoft_Flosser_Toothbrush_2_pack_swiss_made__66902.1616093153.jpg?c=2?imbypass=on',
        title: 'Зубна щітка СS 5460 Ultra Soft',
        price: 288.8,
        salePrice: 0,
        name: 'зелений',
        color: 'seagreen',
        quantity: 6,
        amount: 4,
      },
    ],
    totalPrice: 0,
    promoCode: null,
    discount: 0,
    isSubmitForm: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    addProduct(state, action) {
      //state.products.push(action.payload); старий стейт
      const { id, category, flavor, volume, color } = action.payload;

      const existingProductIndex = state.products.findIndex((product) => {
        if (flavor && volume) {
          return (
            product.id === id &&
            product.flavors?.flavor === flavor &&
            product.flavors?.volume === volume
          );
        } else if (color) {
          return product.id === id && product.colors?.color === color;
        } else if (category) {
          return product.id === id;
        } else {
          return product.id === id;
        }
      });

      if (existingProductIndex !== -1) {
        // Якщо товар вже існує, викликаємо changeProductAmount
        const existingProduct = state.products[existingProductIndex];
        const newCount = existingProduct.amount + 1;
        state.products[existingProductIndex].amount = newCount;
        state.products[existingProductIndex].isDisabledIncrement =
          newCount === existingProduct.quantity;
      } else {
        // Якщо товару ще немає, додаємо його
        state.products.push({
          ...action.payload,
          amount: 1,
        });
      }

      state.totalPrice = totalPrice(state.products);
    },
    removeProduct(state, action) {
      const { id, category, flavor, volume, color } = action.payload;
      state.products = state.products.filter(
        (product) =>
          product.id !== id ||
          (product.flavors?.flavor !== flavor &&
            product.flavors?.volume !== volume) ||
          product.colors?.color !== color ||
          product.category !== category
      );
      state.totalPrice = totalPrice(state.products);
      const total = state.totalPrice;
      const promoCodeDiscount = state.discountValue;
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
            product.flavors?.flavor === flavor &&
            product.flavors?.volume === volume
          );
        } else if (color) {
          // Якщо є colors
          return product.id === id && product.colors?.color === color;
        } else if (category) {
          //якщо є категорія
          return product.id === id && product.category === category;
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
        const promoCodeDiscount = state.discountValue;
        state.discount = totalPriceDiscount(total, promoCodeDiscount);
      }
    },
    addTotalPrice(state, action) {
      state.totalPrice = totalPrice(action.payload);
    },
    // usedPromoCode(state, action) {
    //   const { values, total } = action.payload;
    //   const { promoCode } = values;
    //   state.promoCode = promoCode;
    //   state.discount = totalPriceDiscount(total);
    // },  використання промокоду синхронна операція (без запиту)
    notUsedPromoCode(state) {
      state.promoCode = null;
      state.discount = 0;
    },
    submitForm(state, action) {
      state.isSubmitForm = action.payload;
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
        state.discountValue = promoCodeDiscount;
        state.discount = totalPriceDiscount(total, promoCodeDiscount);
      })
      .addCase(checkPromoCode.rejected, (state, { payload }) => {
        state.isLoading = false;
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
