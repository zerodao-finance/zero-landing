export interface ITxProps {
  id: string;
  block: string | number;
  from: string;
  to: string;
  amount: string | number;
}

export interface IFormattedTxProps {
  timestamp: string;
  type: string;
  amount: string;
  to: string;
  from: string;
  block: string | number;
  transactionHash: string;
  chain: IGraphChains;
}

export type IChainDataProps = {
  transactions: Array<IFormattedTxProps>;
  volume: number;
  burns: number;
  mints: number;
};

export type IGraphChains = 'eth' | 'arb' | 'matic' | 'avax';
