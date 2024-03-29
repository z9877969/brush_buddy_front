import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sendOrderData } from '@redux/cart/operationsCart';

const initialState = {
  number: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrderNum(state) {
      state.number = null;
    },
  },
  extraReducers: (build) => {
    build.addCase(sendOrderData.fulfilled, (state, { payload }) => {
      state.number = payload.orderNum;
    });
  },
});

export const { resetOrderNum } = orderSlice.actions;

const orderPersistConfig = {
  key: 'order',
  storage,
  whitelist: ['number'],
};

export const orderReducer = persistReducer(
  orderPersistConfig,
  orderSlice.reducer
);
