import Web3 from 'web3';
import TestTokenBuild from '../abi/TestToken.json';
import CountdownButtonBuild from '../abi/CountdownButton.json';

let ttContract;
let cbContract;

let selectedAccount;
let isInitialized = false;

export const connectMetamask = async (setAccountAddress) => {
  let provider = window.ethereum;
  if (typeof provider !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      selectedAccount = accounts[0];
      setAccountAddress(selectedAccount);
      console.log(`selected account is ${selectedAccount}`);
      localStorage.setItem('loggedIn', selectedAccount);
    } catch (error) {
      console.log(error);
      return;
    }
    const web3 = new Web3(provider);
    ttContract = new web3.eth.Contract(
      TestTokenBuild.abi,
      '0x8127499D2225e4003BB8b9930E9d208d826E0105'
    );
    cbContract = new web3.eth.Contract(
      CountdownButtonBuild.abi,
      '0x8F0B78A3Eb8f0Cb6F0B2f83E49AeE23AaF379b23'
    );
    isInitialized = true;

    console.log(isInitialized);
  }
};

export const buttonClicked = async () => {
  if (!isInitialized) {
    await connectMetamask();
  }
  return cbContract.methods.onClick(true).send({
    from: selectedAccount,
  });
};

export const getPrize = async () => {
  return ttContract.methods
    .balanceOf('0x8F0B78A3Eb8f0Cb6F0B2f83E49AeE23AaF379b23')
    .call();
};

export const approve = async () => {
  if (!isInitialized) {
    await connectMetamask();
  }
  return ttContract.methods
    .approve(
      '0x8F0B78A3Eb8f0Cb6F0B2f83E49AeE23AaF379b23',
      '20000000000000000000'
    )
    .send({
      from: selectedAccount,
    });
};

export const getCountdownEnd = () => {
  return cbContract.methods.countdownEnd().call();
};
