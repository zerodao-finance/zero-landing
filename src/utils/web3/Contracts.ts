import { ethers } from 'ethers';

import { ethProvider } from './Providers';

// Contracts
// eslint-disable-next-line
export const { address: ethBridgeControllerAddress } = require('zero-protocol/deployments/mainnet/BadgerBridgeZeroController.json');   
// eslint-disable-next-line
export const { abi, address } = require('./RenbtcDeployment.json'); 

export const ethRenBtcContract = new ethers.Contract(
  address,
  abi,
  ethProvider.getSigner(0)
);
