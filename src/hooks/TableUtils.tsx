import { useState } from 'react';

import { IEventProps } from '../utils/Types';

// TODO: Fix all these functions

function useTableUtils() {
  const [filters, setFilters] = useState<any>({});
  const [originalData, setOriginalData] = useState<Array<IEventProps>>([]);
  const [filteredData, setFilteredData] = useState<Array<IEventProps>>([]);

  const updateFilter = (header: string) => {
    const formattedHeader: string = header.replaceAll(' ', '').toLowerCase();

    if (filters[formattedHeader] && filters[formattedHeader].active) {
      if (filters[formattedHeader].order === 'asc') {
        setFilters({
          [formattedHeader]: { active: true, order: 'desc' },
        });
      } else {
        setFilters({
          [formattedHeader]: { active: false, order: '' },
        });
      }
    } else {
      setFilters({
        [formattedHeader]: { active: true, order: 'asc' },
      });
    }
  };

  const sortByNumber = (data: Array<any>, header: string) => {
    let formattedHeader: string;
    if (header === 'Block Number') {
      formattedHeader = 'blockNumber';
    } else {
      formattedHeader = header.replaceAll(' ', '').toLowerCase();
    }

    let sorted;
    if (
      filters &&
      filters[formattedHeader] &&
      filters[formattedHeader].active
    ) {
      if (filters[formattedHeader].order === 'asc') {
        // Return descending
        sorted = data.sort((a, b) =>
          parseFloat(a[formattedHeader]) < parseFloat(b[formattedHeader])
            ? 1
            : -1
        );
      } else {
        // Return original array
        sorted = originalData;
      }
    } else {
      // return ascending
      sorted = data.sort((a, b) =>
        parseFloat(b[formattedHeader]) > parseFloat(a[formattedHeader]) ? 1 : -1
      );
    }
    setFilteredData(sorted);
    return sorted;
  };

  const sortByAlpha = (data: Array<any>, header: string) => {
    const formattedHeader = header.replaceAll(' ', '').toLowerCase();

    updateFilter(formattedHeader);

    let sorted;
    if (
      filters &&
      filters[formattedHeader] &&
      filters[formattedHeader].active
    ) {
      if (filters[formattedHeader].order === 'asc') {
        // Return descending
        sorted = data.sort((a, b) =>
          a[formattedHeader] < b[formattedHeader] ? 1 : -1
        );
      } else {
        // Return original array
        sorted = originalData;
      }
    } else {
      // return ascending
      sorted = data.sort((a, b) =>
        a[formattedHeader] > b[formattedHeader] ? 1 : -1
      );
    }

    setFilteredData(sorted);
    return sorted;
  };

  const sortByDate = (data: Array<any>, header: string) => {
    let formattedHeader: string;
    if (header === 'Date') {
      formattedHeader = 'timestamp';
    } else {
      formattedHeader = header.replaceAll(' ', '').toLowerCase();
    }

    updateFilter(formattedHeader);

    let sorted;
    if (
      filters &&
      filters[formattedHeader] &&
      filters[formattedHeader].active
    ) {
      if (filters[formattedHeader].order === 'asc') {
        // return descending
        sorted = data.sort((a, b) =>
          new Date(a[formattedHeader]) < new Date(b[formattedHeader]) ? 1 : -1
        );
      } else {
        // return original array
        sorted = originalData;
      }
    } else {
      // return ascending
      sorted = data.sort((a, b) =>
        new Date(a[formattedHeader]) > new Date(b[formattedHeader]) ? 1 : -1
      );
    }

    setFilteredData(sorted);
    return sorted;
  };

  // const searchTable = (
  //     data: Array<any>,
  //     input:string
  // ) => {

  // }

  return {
    filters,
    setFilters,
    sortByNumber,
    sortByAlpha,
    sortByDate,
    // searchTable,
    originalData,
    setOriginalData,
    filteredData,
    setFilteredData,
  };
}

export default useTableUtils;
