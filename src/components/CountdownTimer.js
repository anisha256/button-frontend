import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CountdownTimer = () => {
  const { timerDays, timerHours, timerMinutes, timerSeconds } = useSelector(
    (state) => state.countDown
  );
  // let interval;
  // const startTimer = () => {
  // const countDownDate = countdownEnd * 1000;
  // console.log('entered timer2', countDownDate);
  // const countDownDate = new Date('Aug 10,2022').getTime();
  // console.log(countDownDate);

  // interval = setInterval(() => {
  //   const now = new Date().getTime();
  // const gap = countDownDate - now;
  // console.log(gap);
  // const days = Math.floor(gap / (24 * 60 * 60 * 1000));
  // const hours = Math.floor(
  //   (gap % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  // );
  // const minutes = Math.floor((gap % (60 * 60 * 1000)) / (1000 * 60));
  // const seconds = Math.floor((gap % (60 * 1000)) / 1000);

  // if (gap < 0) {
  //   //stop timer
  //   clearInterval(interval.current);
  // } else {
  //update
  // setTimerDays(days);
  // setTimerHours(hours);
  // setTimerMinutes(minutes);
  // setTimerSeconds(seconds);
  //     }
  //   });
  // };
  useEffect(() => {
    // startTimer();
  }, []);

  return (
    <Fragment>
      <TimerContainer>
        <Timer>
          <p>{timerDays}</p>
          <small>Days</small>
        </Timer>
        <span>:</span>
        <Timer>
          <p>{timerHours}</p>
          <small>Hours</small>
        </Timer>
        <span>:</span>
        <Timer>
          <p>{timerMinutes}</p>
          <small>Min</small>
        </Timer>
        <span>:</span>
        <Timer>
          <p>{timerSeconds}</p>
          <small>Sec</small>
        </Timer>
      </TimerContainer>
    </Fragment>
  );
};

export default CountdownTimer;

const TimerContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 150px;
  width: 380px;
  padding: 0px 10px;
`;
const Timer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  p {
    font-size: 50px;
  }
`;
