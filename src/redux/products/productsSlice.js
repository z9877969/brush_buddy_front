import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsOperations';

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
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      state.list = payload;
    });
  },
});

export const { addProductsList } = productsSlice.actions;
export default productsSlice.reducer;

// id + color || colorMarker + volume -> iuyqiuwyiuyuiyui_red_150
