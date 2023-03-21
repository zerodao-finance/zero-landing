export type IEventProps = {
  address: string;
  blockHash: string;
  blockNumber: number;
  event: string;
  logIndex: number;
  raw: {
    data: string;
    topics: Array<any>;
  };
  returnValues:
    | {
        0: string;
        1: string;
        2: string;
        from: string;
        to: string;
        value: string;
      }
    | any;
  signature: string;
  transactionHash: string;
  transactionIndex: number;
  timestamp?: string | Date | number | any;
  type?: string;
  amount?: string;
};
