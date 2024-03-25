import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  // products,
  productsList,
} from 'shared/data';

export const getProducts = createAsyncThunk(
  'products/get',
  async (_, { rejectWithValue }) => {
    try {
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          // resolve(products);
          resolve(productsList);
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
