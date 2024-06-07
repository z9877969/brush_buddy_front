import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBlogsApi } from 'services/brushbuddyApi';

export const getBlogs = createAsyncThunk(
  'blogs/get',
  async (_, { rejectWithValue }) => {
    try {
      const blogs = await getBlogsApi();
      return blogs;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
