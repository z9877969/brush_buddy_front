import { createAsyncThunk } from '@reduxjs/toolkit';
import { products } from 'shared/data';

export const getProducts = createAsyncThunk(
  'products/get',
  async (_, { rejectWithValue }) => {
    try {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 500);
      });
      const listProducts = await promise;
      return listProducts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {}
);
