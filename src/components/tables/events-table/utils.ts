import useTableUtils from '../../../hooks/TableUtils';
import { IHeaderProps } from '../../../utils/Types';

function useEventTableUtils() {
  const { sortByAlpha, sortByDate, sortByNumber } = useTableUtils();

  const headersLarge: Array<IHeaderProps> = [
    {
      text: 'Date',
      sortFx: sortByDate,
    },
    {
      text: 'Type',
      sortFx: sortByAlpha,
    },
    {
      text: 'Block Number',
      sortFx: sortByNumber,
    },
    {
      text: 'Transaction Hash',
    },
    {
      text: 'Amount',
      sortFx: sortByNumber,
    },
  ];

  const headersSmall: Array<IHeaderProps> = [
    {
      text: 'Date',
      sortFx: sortByDate,
    },
    {
      text: 'Type',
      sortFx: sortByAlpha,
    },
    {
      text: 'TX',
    },
    {
      text: 'Amount',
      sortFx: sortByNumber,
    },
  ];

  return {
    headersLarge,
    headersSmall,
  };
}

export default useEventTableUtils;
