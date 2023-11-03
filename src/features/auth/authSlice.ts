// src/features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  email: string;
  password: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: 'idle',
  error: null,
};

export const signUp = createAsyncThunk('auth/signUp', async (userData: User) => {
  try {
    const response = await axios.post('https://reqres.in/api/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default authSlice.reducer;