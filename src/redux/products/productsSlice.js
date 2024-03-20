import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    addProductsList(state, { payload }) {
      state.list = payload;
    },
  },
});

export const { reducer } = productsSlice;
export const { addProductsList } = productsSlice.actions;

// id + color || colorMarker + volume -> iuyqiuwyiuyuiyui_red_150
