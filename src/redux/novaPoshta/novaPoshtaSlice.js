import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestCity } from './api';

export const apiGetCity = createAsyncThunk(
  'novaPoshta/apiGetCity',
  async (cityName, thunkApi) => {
    try {
      const city = await requestCity(cityName);
      return city;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cityName: '',
  cityData: null,
  postOffice: [],
  error: null,
  status: 'idle',
};

const novaPoshtaSlice = createSlice({
  name: 'novaPoshta',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(apiGetCity.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(apiGetCity.fulfilled, (state, action) => {
        state.status = 'success';
        state.cityData = action.payload.data[0].Addresses;
      })
      .addCase(apiGetCity.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error;
      });
  },
});

export const { setOrderNames, setOrderEmail, setOrderPhone } =
  novaPoshtaSlice.actions;

export const novaPoshtaReducer = novaPoshtaSlice.reducer;
