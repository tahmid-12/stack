// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import authLoginReducer from './features/auth/authLoginSlice';
import dataReducer from './features/data/dataSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    authLogin: authLoginReducer,
    data: dataReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
