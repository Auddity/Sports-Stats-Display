import { configureStore } from '@reduxjs/toolkit';
import asideReducer from './features/aside/asideSlice';

export const store = configureStore({
  reducer: {
    aside: asideReducer,
  },
});
