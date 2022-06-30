import { ethers } from 'ethers';

import { PROVIDERS } from './Providers';

// Contracts
// eslint-disable-next-line
export const { abi } = require('./RenbtcDeployment.json');

const RENBTC_DEPLOYMENTS = {
  ETHEREUM: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  MATIC: '0xD6C23852b94FEde6AB571e4b4cFdb745b49Dc9EB',
  ARBITRUM: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
  AVALANCHE: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501', // IS THIS CORRECT?
};

export const CONTROLLER_DEPLOYMENTS = {
  ETHEREUM: '0xa8bd3ffebf92538b3b830dd5b2516a5111db164d',
  MATIC: '0x85dAC4da6eB28393088CF65b73bA1eA30e7e3cab',
  ARBITRUM: '0x53f38bEA30fE6919e0475Fe57C2629f3D3754d1E',
  AVALANCHE: '0x1ec2abe3f25f5d48567833bf913f030ec7a948ba',
};

export const ethRenBtcContract = new ethers.Contract(
  RENBTC_DEPLOYMENTS.ETHEREUM,
  abi,
  PROVIDERS.ETHEREUM.getSigner(0)
);

export const avaxRenBtcContract = new ethers.Contract(
  RENBTC_DEPLOYMENTS.AVALANCHE,
  abi,
  PROVIDERS.AVALANCHE.getSigner(0)
);

export const maticRenBtcContract = new ethers.Contract(
  RENBTC_DEPLOYMENTS.MATIC,
  abi,
  PROVIDERS.MATIC.getSigner(0)
);

export const arbRenBtcContract = new ethers.Contract(
  RENBTC_DEPLOYMENTS.ARBITRUM,
  abi
  // TODO: fix what signer is needed - infuraprovider inherits signers and does not need provider?
);
