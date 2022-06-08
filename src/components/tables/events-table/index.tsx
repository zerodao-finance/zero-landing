import { useState } from 'react';

import { AiOutlineCaretDown } from 'react-icons/ai';

// Hooks & Helpers
import useWindowDimensions from '../../../hooks/WindowDimensions';
import {
  capitalize,
  shortenDate,
  truncateBetween,
} from '../../../utils/Helpers';
// Utils
import { IEventsTableProps, IHeaderProps } from '../../../utils/Types';
import { Pagination } from '../Pagination';
import TableSearch from '../Search';
import useEventTableUtils from './utils';
// Components

const EventsTable = (props: IEventsTableProps) => {
  const { data, search, pagination } = props;
  const { width } = useWindowDimensions();
  const { headersSmall, headersLarge, searchTableByHash } =
    useEventTableUtils();
  const [input, setInput] = useState('');

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
            {data.map((event, i) => (
              <tr key={i}>
                <td>
                  {width > 900
                    ? new Date(event.timestamp).toLocaleDateString()
                    : shortenDate(event.timestamp)}
                </td>
                <td>
                  <div
                    className={`
                    ${width > 900 ? `px-3` : `px-2`}
                    py-1 w-fit rounded-3xl
                    ${
                      event.type === 'burn'
                        ? `bg-red-200 text-black`
                        : `bg-green-200 text-black`
                    }
                  `}
                  >
                    {capitalize(event.type)}
                  </div>
                </td>
                {width > 900 && <td>{event.blockNumber}</td>}
                <td id={`hash-${event.transactionHash}`}>
                  <a
                    href={`https://etherscan.io/tx/${event.transactionHash}`}
                    target="_blank"
                    className="hover:text-brand-100 transition duration-200 underline"
                    rel="noreferrer"
                  >
                    {truncateBetween(
                      event.transactionHash,
                      width,
                      width > 900 ? 6 : 3
                    )}
                  </a>
                </td>
                <td>
                  {width > 900
                    ? event.amount
                    : parseFloat(event.amount || '0').toFixed(3)}{' '}
                  BTC
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pagination && <Pagination data={data} />}

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
