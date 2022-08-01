import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { approve, buttonClicked, getPrize } from '../utils/Web3';

const Home = () => {
  const [prize, setPrize] = useState(0);
  const fetchData = () => {
    getPrize()
      .then((prize) => {
        setPrize(prize / 10 ** 18);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(prize);
  };
  useEffect(() => {
    fetchData();
    approve();
  }, []);

  return (
    <Container>
      <Content>
        <h1>Button</h1>
        <p>COUNT DOWN</p>
        <h2>APPROVE</h2>
        <ApproveButton onClick={() => approve()}>Approve</ApproveButton>
        <p>Prize Accumulated</p>
        <span>{prize} TT</span>

        <Div>
          <ButtonDiv>
            <Button onClick={() => buttonClicked()}></Button>
          </ButtonDiv>
        </Div>
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
