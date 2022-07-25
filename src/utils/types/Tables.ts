import { IEventProps } from './Events';

export type IEventsTableProps = {
  data: Array<IEventProps>;
  pagination?: boolean;
  search?: boolean;
};

export type IHeaderProps = {
  text: string;
  sortFx?: any;
};
