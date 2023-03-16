import useTableUtils from '../../../hooks/table-utils';
import { IHeaderProps } from '../../../types/Tables';

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
      text: 'Chain',
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

  function searchTableByHash(_input: string) {
    // Declare variables
    let td;
    let i;
    let txtValue;
    const filter: string = _input.toUpperCase();
    const table: any = document.getElementById('events-table');
    const tr: any = table.getElementsByTagName('tr');
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i += 1) {
      td = tr[i].getElementsByTagName('td')[3];
      if (td) {
        txtValue = td.id;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  return {
    searchTableByHash,
    headersLarge,
    headersSmall,
  };
}

export default useEventTableUtils;
