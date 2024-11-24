import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    height: 0,
  },
  reducers: {
    setHeightAction(state, { payload }) {
      state.height = payload;
    },
  },
});

export const { setHeightAction } = headerSlice.actions;
export default headerSlice.reducer;
