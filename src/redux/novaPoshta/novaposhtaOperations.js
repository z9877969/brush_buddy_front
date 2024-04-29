import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestCity, requestDepartment } from 'services/novaposhtaApi';

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
