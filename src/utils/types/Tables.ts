import { IFormattedTxProps } from './GraphData';

export type IEventsTableProps = {
  data: Array<IFormattedTxProps>;
  pagination?: boolean;
  search?: boolean;
};

export type IHeaderProps = {
  text: string;
  sortFx?: any;
};

export type IPaginationProps = {
  data?: Array<any>;
  page: number;
  setPage: any;
  pages: number;
};
