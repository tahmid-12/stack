// src/features/data/dataSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface DataState {
  data: any[] | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: 'idle',
  error: null,
};

export const fetchData = createAsyncThunk('data/fetchData', async (_, { getState }) => {
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('Authentication token is missing');
  }

  const response = await fetch('https://reqres.in/api/users?page=1', {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default dataSlice.reducer;