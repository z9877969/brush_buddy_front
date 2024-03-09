import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => builder,
});

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['products'],
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);
