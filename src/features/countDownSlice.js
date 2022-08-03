import { createSlice } from '@reduxjs/toolkit';
// import { getPrize, getCountdownEnd } from '../utils/Web3';

// export const update = createAsyncThunk();
const initialState = {
  countDownEnd: 0,
  prize: 22,
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
  isError: false,
  isSuccess: false,
  isLoading: false,
};

const countDownSlice = createSlice({
  name: 'countDown',
  initialState,
  reducers: {
    clearCountDown: (state) => {
      state.timerDays = 0;
      state.timerHours = 0;
      state.timerMinutes = 0;
      state.timerSeconds = 0;
    },
    updateStart: (state) => {
      state.isLoading = true;
    },
    updateCountDown: (state, action) => {
      state.isLoading = false;
      state.countDownEnd = action.payload;
    },
    updatePrize: (state, action) => {
      state.isLoading = false;
      state.prize = action.payload;
    },
    updateError: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
  },
});

console.log(countDownSlice);

export const {
  updateStart,
  updateError,
  clearCountDown,
  updateCountDown,
  updatePrize,
} = countDownSlice.actions;

export default countDownSlice.reducer;
