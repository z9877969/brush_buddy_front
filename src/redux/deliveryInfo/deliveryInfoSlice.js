import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  delivery: null,
};

const deliveryInfoSlice = createSlice({
  name: 'deliveryInfo',
  initialState,
  reducers: {
    addDeliveryInfo(state, { payload }) {
      state.delivery = payload;
    },
    addSaveInfo(state, { payload }) {
      state.saveInfo = payload;
    },
    changeButtonSave(state, { payload }) {
      state.buttonSave = payload;
    },
  },
});

export const { addDeliveryInfo, addSaveInfo, changeButtonSave } =
  deliveryInfoSlice.actions;

export const deliveryInfoReducer = deliveryInfoSlice.reducer;
