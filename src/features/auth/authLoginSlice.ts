// src/features/auth/authLoginSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  email: string;
  password: string;
}

interface AuthLoginState {
  user: User | null;
  token: string | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthLoginState = {
  user: null,
  token: null,
  loading: 'idle',
  error: null,
};

export const signIn = createAsyncThunk('authLogin/signIn', async (userData: User) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const authLoginSlice = createSlice({
  name: 'authLogin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'An error occurred';
      });
  },
});

export default authLoginSlice.reducer;
