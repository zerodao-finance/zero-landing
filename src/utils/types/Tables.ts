import { IFormattedTxProps } from './Transactions';

export type IEventsTableProps = {
  data: Array<IFormattedTxProps>;
  pagination?: boolean;
  search?: boolean;
};

export type IHeaderProps = {
  text: string;
  sortFx?: any;
};
