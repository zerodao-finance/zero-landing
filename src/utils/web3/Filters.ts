import { CONTROLLER_DEPLOYMENTS, ethRenBtcContract } from './Contracts';

// Filter queries
// ETH
export const ethBurnFilter = (ethRenBtcContract.filters as any).Transfer(
  CONTROLLER_DEPLOYMENTS.ETHEREUM
);
export const ethMintFilter = (ethRenBtcContract.filters as any).Transfer(
  null,
  CONTROLLER_DEPLOYMENTS.ETHEREUM
);

// ARB
export const arbBurnFilter = (ethRenBtcContract.filters as any).Transfer(
  CONTROLLER_DEPLOYMENTS.ARBITRUM
);
export const arbMintFilter = (ethRenBtcContract.filters as any).Transfer(
  null,
  CONTROLLER_DEPLOYMENTS.ARBITRUM
);

// AVAX
export const avaxBurnFilter = (ethRenBtcContract.filters as any).Transfer(
  CONTROLLER_DEPLOYMENTS.AVALANCHE
);
export const avaxMintFilter = (ethRenBtcContract.filters as any).Transfer(
  null,
  CONTROLLER_DEPLOYMENTS.AVALANCHE
);

// MATIC
export const maticBurnFilter = (ethRenBtcContract.filters as any).Transfer(
  CONTROLLER_DEPLOYMENTS.MATIC
);
export const maticMintFilter = (ethRenBtcContract.filters as any).Transfer(
  null,
  CONTROLLER_DEPLOYMENTS.MATIC
);
