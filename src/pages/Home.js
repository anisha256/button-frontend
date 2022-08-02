import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  approve,
  buttonClicked,
  getCountdownEnd,
  getPrize,
} from '../utils/Web3';
import CountdownTimer from '../components/CountdownTimer';

const Home = () => {
  const [prize, setPrize] = useState(0);
  const [countdownEnd, setCountdownEnd] = useState(0);

  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const fetchData = async () => {
    getPrize()
      .then((prize) => {
        setPrize(prize / 10 ** 18);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchDate = async () => {
    try {
      const date = await getCountdownEnd();
      setCountdownEnd(date);
      console.log(countdownEnd);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async () => {
    await approve();
  };

  const handleClick = async () => {
    try {
      await handleApprove();
      buttonClicked();
    } catch (error) {}
  };

  const startTimer = () => {
    const countDownDate = countdownEnd * 1000;
    console.log('entered timer2', countDownDate);

    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDownDate - now;
      console.log(gap);
      const days = Math.floor(gap / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (gap % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((gap % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((gap % (60 * 1000)) / 1000);

      if (gap < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    fetchData();
    fetchDate();
    startTimer();
  }, [countdownEnd]);

  return (
    <Container>
      <Content>
        <h1>Button</h1>
        <h2>COUNT DOWN</h2>
        <p>{countdownEnd}</p>
        <CountdownTimer
          timerDays={timerDays}
          timerHours={timerHours}
          timerMinutes={timerMinutes}
          timerSeconds={timerSeconds}
        />

        <Div>
          <ButtonDiv>
            <Button onClick={() => handleClick()}></Button>
          </ButtonDiv>
        </Div>
        {/* <ApproveButton onClick={() => handleApprove()}>Approve</ApproveButton> */}
        <h2>PRIZE ACCUMULATED</h2>
        <h3>{prize} TT</h3>

        <p>
          Click the button to become the<b> new leader</b>
        </p>
        <p>and reset the countdown</p>
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  color: white;
`;

const Content = styled.section`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  h1 {
    padding: 20px 0px;
    font-size: 60px;
    color: lightgray;
  }
  h2 {
    padding: 20px 0px;
  }

  p {
    /* padding: 20px 0px; */
    text-align: center;
    font-size: 20px;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ButtonDiv = styled.div`
  height: 220px;
  width: 220px;
  border-radius: 50%;
  border: 4px solid #1f99f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  height: 180px;
  background-color: #1f99f0;
  border-radius: 50%;
  width: 180px;
  border: none;
  /* font-size: 20px; */
  color: white;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;
const ApproveButton = styled.button`
  height: 40px;
  background-color: #1f99f0;
  width: 100px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: grey;
  }
`;
