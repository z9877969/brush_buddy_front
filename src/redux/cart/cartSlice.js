import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { totalPrice, totalPriceDiscount } from 'modules/cart';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      {
        id: 'yrf44b',
        type: 'toothbrush',
        image:
          'https://pro-white.ru/wp-content/uploads/2016/10/VITIS-SOFT-2.jpg',
        name: 'Oral-B Pro 1000',
        color: 'white',
        quantity: 1,
        total_quantity: 2,
        price: 150,
        discounted_price: null,
      },
      {
        id: 'fkofok44',
        type: 'toothpaste',
        image:
          'https://pro-white.ru/wp-content/uploads/2016/10/VITIS-SOFT-2.jpg',
        name: 'Colgate Total',
        flavor: 'mint',
        volume: '100 ml',
        quantity: 5,
        total_quantity: 7,
        price: 50,
        discounted_price: 45,
      },
    ],
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
    changeProductQuantity(state, action) {
      const { id, newCount } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity = newCount;
        state.products[productIndex].isDisabledIncrement =
          newCount === state.products[productIndex].total_quantity;
      }
      state.totalPrice = totalPrice(state.products);
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
  changeProductQuantity,
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
