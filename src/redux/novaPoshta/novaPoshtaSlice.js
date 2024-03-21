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
  cityData: [],
  postOffice: [],
  error: null,
  status: 'idle',
};

const initialStateUser = {
  userNames: '',
  userEmail: '',
  userPhone: '',
  city: null, // обєкт конкретного міста
  department: null, //те відділення яке юзер вибере зі списка
};

const novaPoshtaSlice = createSlice({
  name: 'novaPoshta',
  initialState: { ...initialState, ...initialStateUser },
  reducers: {
    setOrderNames(state, { payload }) {
      state.userNames = payload;
      //   return { ...state, ...payload };
    },
    setOrderEmail(state, { payload }) {
      state.userEmail = payload;
    },
    setOrderPhone(state, { payload }) {
      state.userPhone = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiGetCity.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(apiGetCity.fulfilled, (state, action) => {
        state.status = 'success';
        state.cityData = action.payload;
      })
      .addCase(apiGetCity.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      });
  },
});

export const { setOrderNames, setOrderEmail, setOrderPhone } =
  novaPoshtaSlice.actions;

export const novaPoshtaReducer = novaPoshtaSlice.reducer;
