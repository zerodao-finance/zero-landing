import { ethers } from 'ethers';

// Providers
export const ethProvider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2'
);
export const arbProvider = new ethers.providers.JsonRpcProvider('');
export const avaxProvider = new ethers.providers.JsonRpcProvider('');
