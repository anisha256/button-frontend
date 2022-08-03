import { updateCountDownEnd } from '../features/countDownSlice';
import { getCountdownEnd, getPrize } from '../utils/Web3';

export const updateCountdown = async (countDownEnd, dispatch) => {
  try {
    // const res = await getCountdownEnd();
    const res = await getCountdownEnd();

    console.log('res', res);
    dispatch(updateCountDownEnd(res));

    console.log(dispatch(updateCountDownEnd(res)));
  } catch (error) {
    console.log(error);
  }
};
