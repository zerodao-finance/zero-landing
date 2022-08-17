import { ethers } from 'ethers';

// Styles
export const hoverWhite = 'transition duration-200 hover:text-gray-100';

/* Web3 */
export const BRIDGE_GENESIS_BLOCK = 14567078;

// Providers
export const ethersProvider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2'
);

export const maticProvider = new ethers.providers.JsonRpcProvider(
  'https://polygon-mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2'
);

export const avaxProvider = new ethers.providers.JsonRpcProvider(
  'https://api.avax.network/ext/bc/C/rpc'
);

// Contracts
// eslint-disable-next-line
export const { address: bridgeControllerAddress } = require('zero-protocol/deployments/mainnet/BadgerBridgeZeroController.json');   
// eslint-disable-next-line
export const { abi, address } = require('../utils/RenbtcDeployment.json'); 

export const ethersRenBtcContract = new ethers.Contract(
  address,
  abi,
  ethersProvider.getSigner(0)
);

// Tokens Integrated
export const TOKENS = [
  {
    src: '/assets/svg-coins/btc.svg',
    alt: 'BTC',
  },
  {
    src: '/assets/svg-coins/eth.svg',
    alt: 'ETH',
  },
  {
    src: '/assets/svg-coins/usdc.svg',
    alt: 'USDC',
  },
  {
    src: '/assets/svg-coins/renbtc.svg',
    alt: 'renBTC',
  },
  {
    src: '/assets/svg-coins/wbtc.svg',
    alt: 'WBTC',
  },
  {
    src: '/assets/svg-coins/ibbtc.svg',
    alt: 'ibBTC',
  },
  {
    src: '/assets/svg-coins/avax.svg',
    alt: 'AVAX',
  },
  {
    src: '/assets/svg-coins/matic.svg',
    alt: 'MATIC',
  },
  {
    src: '/assets/svg-coins/zec.svg',
    alt: 'ZCash',
  },
];

// Graph Data Fetching
export const GRAPH_APIS = {
  eth: 'https://api.thegraph.com/subgraphs/name/yoyobojo/zerodao-renbtc',
  arb: 'https://api.thegraph.com/subgraphs/name/yoyobojo/zerodao-renbtc-arb',
  avax: 'https://api.thegraph.com/subgraphs/name/yoyobojo/zerodao-renbtc-avax',
  matic: 'https://api.thegraph.com/subgraphs/name/yoyobojo/zero-subgraph-matic',
};

export const WORKING_CHAINS = ['eth', 'avax', 'matic'];
