import BTCSvg from './svg/coins/btc';
import ETHSvg from './svg/coins/eth';
import ibBTCSvg from './svg/coins/ibbtc';
import renBTCSvg from './svg/coins/renbtc';
import USDCSvg from './svg/coins/usdc';
import WBTCSvg from './svg/coins/wbtc';

// Styles
export const hoverWhite = 'transition duration-200 hover:text-gray-100';

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
