import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';

const CountdownTimer = ({ countdownEnd }) => {
  const countDown = countdownEnd;

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = (countDown) => {
    const countDownDate = countDown * 1000;
    console.log('entered timer', countDown);

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    startTimer();
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
