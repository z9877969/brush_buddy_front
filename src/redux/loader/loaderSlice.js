import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    setLoadingAction(_, { payload }) {
      return payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        (action) => action.type?.endsWith('/pending'),
        () => true
      )
      .addMatcher(
        (action) =>
          action.type?.endsWith('/fulfilled') ||
          action.type?.endsWith('/rejected'),

        () => false
      ),
});

export const { setLoadingAction } = loaderSlice.actions;
export default loaderSlice.reducer;
