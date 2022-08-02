import React, { Fragment } from 'react';
import styled from 'styled-components';

const CountdownTimer = ({
  timerDays,
  timerHours,
  timerMinutes,
  timerSeconds,
}) => {
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
