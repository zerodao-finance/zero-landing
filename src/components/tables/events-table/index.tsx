import { useEffect, useState } from 'react';

// Hooks & Helpers
import { AiOutlineCaretDown } from 'react-icons/ai';

import useWindowDimensions from '../../../hooks/WindowDimensions';
import {
  capitalize,
  shortenDate,
  spliceIntoChunks,
  truncateBetween,
} from '../../../utils/Helpers';
// Utils
import { IEventsTableProps, IHeaderProps } from '../../../utils/types/Tables';
import { IFormattedTxProps } from '../../../utils/types/Transactions';
// Components
import { Pagination } from '../Pagination';
import TableSearch from '../Search';
import useEventTableUtils from './utils';
// External

const EventsTable = (props: IEventsTableProps) => {
  const { data, search, pagination } = props;

  // Hooks
  const { width } = useWindowDimensions();
  const { headersSmall, headersLarge, searchTableByHash } =
    useEventTableUtils();

  // States
  const [input, setInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [paginated, setPaginated] = useState<Array<Array<any>>>([]);

  // useEffects
  useEffect(() => {
    if (pagination && paginated.length === 0) {
      const formatted = spliceIntoChunks(data);
      setPaginated(formatted);
    }
  }, [data]);

  // Utils
  const headers: Array<IHeaderProps> =
    width > 900 ? headersLarge : headersSmall;

  return (
    <>
      {search && (
        <TableSearch
          searchFx={() => searchTableByHash(input)}
          value={input}
          onChange={setInput}
        />
      )}
      <div className="max-h-[400px] overflow-y-scroll">
        <table className="table-auto w-full" id="events-table">
          <thead className="border-b-[2px]">
            <tr>
              {headers.map((header, i) => (
                <th className="text-left" key={i}>
                  <div
                    onClick={() => header.sortFx(props.data, header.text)}
                    className="cursor-pointer flex items-center gap-1"
                  >
                    {header.text}
                    {header.sortFx && <AiOutlineCaretDown />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(pagination ? paginated[currentPage - 1] || [] : data).map(
              (tx: IFormattedTxProps, i) => (
                <tr key={i}>
                  <td>
                    {width > 900
                      ? new Date(tx.timestamp).toLocaleDateString()
                      : shortenDate(tx.timestamp)}
                  </td>
                  <td>
                    <div
                      className={`
                    ${width > 900 ? `px-3` : `px-2`}
                    py-1 w-fit rounded-3xl
                    ${
                      tx.type === 'burn'
                        ? `bg-red-200 text-black`
                        : `bg-green-200 text-black`
                    }
                  `}
                    >
                      {capitalize(tx.type)}
                    </div>
                  </td>
                  {width > 900 && <td>{tx.block}</td>}
                  <td id={`hash-${tx.transactionHash}`}>
                    <a
                      href={`https://etherscan.io/tx/${tx.transactionHash}`}
                      target="_blank"
                      className="hover:text-brand-100 transition duration-200 underline"
                      rel="noreferrer"
                    >
                      {truncateBetween(
                        tx.transactionHash,
                        width,
                        width > 900 ? 6 : 3
                      )}
                    </a>
                  </td>
                  <td>
                    {width > 900
                      ? tx.amount
                      : parseFloat(tx.amount || '0').toFixed(3)}{' '}
                    BTC
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>

      {pagination && (
        <Pagination
          pages={paginated.length}
          page={currentPage}
          setPage={setCurrentPage}
        />
      )}

      <style jsx>
        {`
          table {
            text-align: left;
            position: relative;
          }
          th {
            background: #0a0a0a;
            position: sticky;
            top: -2px;
            padding-bottom: 0.5rem;
            padding-top: 0.5rem;
          }
          th:first-child {
            padding-left: 1rem;
          }
          td {
            padding-top: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid gray;
          }

          td:first-child {
            padding-left: 1rem;
            padding-right: 0;
          }
        `}
      </style>
    </>
  );
};

export { EventsTable };
