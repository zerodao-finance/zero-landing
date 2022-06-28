import { ethers } from 'ethers';
import Web3 from 'web3';

import BTCSvg from './svg/coins/btc';
import ETHSvg from './svg/coins/eth';
import ibBTCSvg from './svg/coins/ibbtc';
import renBTCSvg from './svg/coins/renbtc';
import USDCSvg from './svg/coins/usdc';
import WBTCSvg from './svg/coins/wbtc';

// Styles
export const hoverWhite = 'transition duration-200 hover:text-gray-100';

/* Web3 */
export const BRIDGE_GENESIS_BLOCK = 14567078;

// Providers
export const ethProvider = new Web3(
  'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2'
);

export const ethersProvider = new ethers.providers.JsonRpcProvider(
  'https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2'
);

// Contracts
// eslint-disable-next-line
export const { address: bridgeControllerAddress } = require('zero-protocol/deployments/mainnet/BadgerBridgeZeroController.json');   
// eslint-disable-next-line
export const { abi, address } = require('../utils/RenbtcDeployment.json'); 
export const renBtcContract = new ethProvider.eth.Contract(abi, address);

export const ethersRenBtcContract = new ethers.Contract(
  address,
  abi,
  ethersProvider.getSigner(0)
);

// Tokens Integrated
export const tokens = [
  {
    src: '/assets/svg-coins/btc.svg',
    alt: 'BTC',
    svg: BTCSvg,
  },
  {
    src: '/assets/svg-coins/eth.svg',
    alt: 'ETH',
    svg: ETHSvg,
  },
  {
    src: '/assets/svg-coins/usdc.svg',
    alt: 'USDC',
    svg: USDCSvg,
  },
  {
    src: '/assets/svg-coins/renbtc.svg',
    alt: 'renBTC',
    svg: renBTCSvg,
  },
  {
    src: '/assets/svg-coins/wbtc.svg',
    alt: 'WBTC',
    svg: WBTCSvg,
  },
  {
    src: '/assets/svg-coins/ibbtc.svg',
    alt: 'ibBTC',
    svg: ibBTCSvg,
  },
];
