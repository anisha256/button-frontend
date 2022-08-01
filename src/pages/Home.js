import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Content>
        <h1>Button</h1>
        <p>COUNT DOWN</p>
        <Div>
          <ButtonDiv>
            <Button></Button>
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
  height: 200px;
  /* background-color: white; */
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  height: 180px;
  background-color: blue;
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
