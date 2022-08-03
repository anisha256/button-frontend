import {
  updateCountDown,
  updateError,
  updatePrize,
  updateStart,
} from '../features/countDownSlice';
import { getCountdownEnd, getPrize } from '../utils/Web3';

export const updateCountdown = async (countDownEnd, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await getCountdownEnd();
    console.log('res', res);
    console.log(dispatch(updateCountDown(res)));
  } catch (error) {
    dispatch(updateError());
  }
};

export const updatePrizepool = async (prize, dispatch) => {
  dispatch(updateStart());
  try {
    const prize = await getPrize();
    console.log('prize', prize);
    console.log(dispatch(updatePrize(prize)));
  } catch (error) {
    dispatch(updateError());
  }
};
