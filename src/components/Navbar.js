import React, { useState } from 'react';
import styled from 'styled-components';
import { connectMetamask } from '../utils/Web3';

const Navbar = () => {
  const [accountAddress, setAccountAddress] = useState(null);

  return (
    <>
      <Nav>
        <NavLeft></NavLeft>
        <NavRight>
          <WalletButton
            variant="contained"
            onClick={() => connectMetamask(setAccountAddress)}
          >
            {!!accountAddress
              ? `${accountAddress.slice(0, 6)}...${accountAddress.slice(
                  accountAddress.length - 4,
                  accountAddress.length
                )}`
              : 'Connect Wallet'}
          </WalletButton>
        </NavRight>
      </Nav>
    </>
  );
};

export default Navbar;
const Nav = styled.div`
  top: 0;
  width: 100%;
  height: 80px;
  background-color: black;
  /* display: grid;
  grid-template-columns: 60px 1fr 2fr 1.5fr 60px; */
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;
const NavLeft = styled.div``;
const NavRight = styled.div`
  display: flex;
`;
const WalletButton = styled.button`
  height: 40px;
  width: auto;
  min-width: 32px;
  justify-content: center;
  padding: 0px 15px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background-color: grey;
  color: white;
  cursor: pointer;
`;
