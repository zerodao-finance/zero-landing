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
}
