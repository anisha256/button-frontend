import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    updateCountDownEnd: (state, action) => {
      state.countDownEnd = action.payload;
      // console.log('state.countDownEnd', state.countDownEnd);
    },
    updateError: (state) => {
      state.isError = true;
    },
  },
});

console.log(countDownSlice);

export const { clearCountDown, updateCountDownEnd } = countDownSlice.actions;

export default countDownSlice.reducer;
