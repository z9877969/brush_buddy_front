import { createAsyncThunk } from '@reduxjs/toolkit';

import { telegramApi as tgApi } from 'services';

export const checkPromoCode = createAsyncThunk(
  'cart/sendPromo',
  async (data, { rejectWithValue }) => {
    try {
      //const valuePromoCode = data.values.promoCode; //введений промокод для відправки на бекенд

      const discount = Math.floor(Math.random() * 20) + 1;

      return { discount: discount, total: data.total };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendOrderData = createAsyncThunk(
  'cart/sendOrder',
  async (data, { rejectWithValue }) => {
    try {
      const order = await tgApi.sendMessageTg(data);
      return order;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
