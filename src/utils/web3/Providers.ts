import { ethers } from 'ethers';

const RPC_ENDPOINTS = {
  ARBITRUM: 'https://arb1.arbitrum.io/rpc',
  MATIC:
    'https://polygon-mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2',
  AVALANCHE: 'https://api.avax.network/ext/bc/C/rpc',
  ETHEREUM: 'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2',
};

export const getProvider = (
  chain: string,
  key: string = '816df2901a454b18b7df259e61f92cd2'
) => new ethers.providers.InfuraProvider(chain.toLowerCase(), key);

// Providers
const ethProvider = new ethers.providers.JsonRpcProvider(
  RPC_ENDPOINTS.ETHEREUM
);

const arbProvider = getProvider('arbitrum', 'ca0da016dedf4c5a9ee90bfdbafee233');

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
