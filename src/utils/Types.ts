// Web3
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

// Charts
export type IBarChartProps = {
  name: string;
  amt: number;
};

export type ICustomTooltipProps = {
  payload?: any;
  label?: any;
  active?: any;
};

// Tables
export type IEventsTableProps = {
  data: Array<IEventProps>;
  pagination?: boolean;
  search?: boolean;
};

export type IHeaderProps = {
  text: string;
  sortFx?: any;
};

// Blog
export type IBlogDataProps = {
  author: string;
  categories?: Array<string>;
  content?: string;
  description: string;
  guid?: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
  id?: number;
};

// Atoms
export type ILinkProps = {
  href: string;
  text: string;
};
