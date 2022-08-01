import Web3 from 'web3';
import TestTokenBuild from '../abi/TestToken.json';
import CountdownButtonBuild from '../abi/CountdownButton.json';

let ttContract;
let cbContract;

let selectedAccount;
let isInitialized = false;

let currentBalance;

export const connectMetamask = async (setAccountAddress) => {
  let provider = window.ethereum;
  if (typeof provider !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      selectedAccount = accounts[0];
      setAccountAddress(accounts[0]);
      console.log(`selected account is ${selectedAccount}`);
    } catch (error) {
      console.log(error);
      return;
    }
    const web3 = new Web3(provider);
    ttContract = new web3.eth.Contract(
      TestTokenBuild.abi,
      '0x89e662325BE902fEbc72367e4c2a877D5F50C7f3'
    );
    cbContract = new web3.eth.Contract(
      CountdownButtonBuild.abi,
      '0x31E2720da985A183674e9EA240ACfCDea7b846fa'
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
    .balanceOf('0x31e2720da985a183674e9ea240acfcdea7b846fa')
    .call();
};
const checkBalance = async () => {
  if (!isInitialized) {
    await connectMetamask();
  }
  currentBalance = await ttContract.methods.balanceOf(selectedAccount).call();
};
export const approve = async () => {
  if (!isInitialized) {
    await connectMetamask();
  }

  return ttContract.methods
    .approve(
      '0x31e2720da985a183674e9ea240acfcdea7b846fa',
      '20000000000000000000'
    )
    .send({
      from: selectedAccount,
    });
};
