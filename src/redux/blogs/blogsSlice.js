import { createSlice } from '@reduxjs/toolkit';
import { getBlogs } from './blogsOperations';

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: [],
  extraReducers: (builder) =>
    builder.addCase(getBlogs.fulfilled, (_, { payload }) => {
      return payload;
    }),
});

export default blogsSlice.reducer;
