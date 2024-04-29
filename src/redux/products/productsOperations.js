import { createAsyncThunk } from '@reduxjs/toolkit';
import { brushbuddyApi as bbApi } from 'services';

// export const getProducts = createAsyncThunk(
//   'products/get',
//   async (_, { rejectWithValue }) => {
//     try {
//       const productsList = await fbApi.getProductsApi();
//       return productsList;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
//   {
//     condition(_, { getState }) {
//       const { list } = getState().products;
//       return list.length === 0;
//     },
//   }
// );

export const getProducts = createAsyncThunk(
  'products/get',
  async (_, { rejectWithValue }) => {
    try {
      const productsList = await bbApi.getProductsListApi();
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

// export const getOneProduct = createAsyncThunk(
//   'products/get-one',
//   async (prodId, { rejectWithValue }) => {
//     try {
//       const product = await bbApi.getOneProductApi(prodId);
//       return productsList;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
//   {
//     condition(_, { getState }) {
//       const { list } = getState().products;
//       return list.length === 0;
//     },
//   }
// );
