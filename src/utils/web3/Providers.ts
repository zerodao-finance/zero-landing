import { ethers } from 'ethers';

const RPC_ENDPOINTS = {
  ARBITRUM: 'https://arb1.arbitrum.io/rpc',
  MATIC:
    'https://polygon-mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2',
  AVALANCHE: 'https://api.avax.network/ext/bc/C/rpc',
  ETHEREUM: 'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2',
};

// Providers
const ethProvider = new ethers.providers.JsonRpcProvider(
  RPC_ENDPOINTS.ETHEREUM
);

const arbProvider = new ethers.providers.JsonRpcProvider(
  RPC_ENDPOINTS.ARBITRUM
);

const avaxProvider = new ethers.providers.JsonRpcProvider(
  RPC_ENDPOINTS.AVALANCHE
);

const maticProvider = new ethers.providers.JsonRpcProvider(RPC_ENDPOINTS.MATIC);

export const PROVIDERS = {
  ARBITRUM: arbProvider,
  MATIC: maticProvider,
  AVALANCHE: avaxProvider,
  ETHEREUM: ethProvider,
};
