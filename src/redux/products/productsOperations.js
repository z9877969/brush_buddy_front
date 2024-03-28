import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebaseApi as fbApi } from 'services';

export const getProducts = createAsyncThunk(
  'products/get',
  async (_, { rejectWithValue }) => {
    try {
      const productsList = await fbApi.getProductsApi();
      return productsList;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { list } = getState().products;
      return list.length === 0;
    },
  }
);
