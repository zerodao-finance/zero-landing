import { ethers } from 'ethers';

import { PROVIDERS } from './Providers';

// Contracts
// eslint-disable-next-line
export const { abi, address } = require('./RenbtcDeployment.json'); 

export const ethRenBtcContract = new ethers.Contract(
  address,
  abi,
  PROVIDERS.ETHEREUM.getSigner(0)
);

export const CONTROLLER_DEPLOYMENTS = {
  ETHEREUM: '0xa8bd3ffebf92538b3b830dd5b2516a5111db164d',
  MATIC: '0x85dAC4da6eB28393088CF65b73bA1eA30e7e3cab',
  ARBITRUM: '0x53f38bEA30fE6919e0475Fe57C2629f3D3754d1E',
  AVALANCHE: '0x1ec2abe3f25f5d48567833bf913f030ec7a948ba',
};
