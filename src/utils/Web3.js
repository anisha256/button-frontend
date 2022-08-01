import Web3 from 'web3';

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
      setAccountAddress(accounts[0]);
      console.log(`selected account is ${selectedAccount}`);
    } catch (error) {
      console.log(error);
      return;
    }
    isInitialized = true;
    const web3 = new Web3(provider);
    console.log(isInitialized);
  }
};
