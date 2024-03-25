import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { requestCity, requestDepartment } from './api';

export const apiGetCity = createAsyncThunk(
  'novaPoshta/apiGetCity',
  async (partCityName, thunkApi) => {
    try {
      const city = await requestCity(partCityName);
      return city;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetDepartment = createAsyncThunk(
  'novaPoshta/apiGetDepartment',
  async (fullCityName, thunkApi) => {
    try {
      const city = await requestDepartment(fullCityName);
      return city;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  cityData: [],
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
      .addCase(apiGetCity.fulfilled, (state, action) => {
        state.status = 'success';
        state.cityData = action.payload.data[0].Addresses;
      })
      .addCase(apiGetDepartment.fulfilled, (state, action) => {
        state.status = 'success';
        state.postOffice = action.payload.data;
      })

      .addMatcher(
        isAnyOf(apiGetCity.pending, apiGetDepartment.pending),
        (state) => {
          state.status = 'pending';
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(apiGetCity.rejected, apiGetDepartment.rejected),
        (state, action) => {
          state.status = 'error';
          state.error = action.error;
        }
      );
  },
});

export const novaPoshtaReducer = novaPoshtaSlice.reducer;
