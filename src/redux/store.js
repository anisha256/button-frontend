import { configureStore } from '@reduxjs/toolkit';
import countDownReducer from '../features/countDownSlice';

export const store = configureStore({
  reducer: {
    countDown: countDownReducer,
  },
});
