import { ethers } from 'ethers';

import { IGraphChains } from '../types/GraphData';

export const RPC_ENDPOINTS: any = {
  arb: 'https://arbitrum-mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2',
  matic:
    'https://polygon-mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2',
  eth: 'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2',
  avax: 'https://api.avax.network/ext/bc/C/rpc',
};

export const getJsonRpcProvider = (chain: IGraphChains) => {
  return new ethers.providers.JsonRpcProvider(
    RPC_ENDPOINTS[chain && chain.toUpperCase()]
  );
};
