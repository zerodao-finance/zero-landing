import { BigNumber, utils } from 'ethers';

import useWindowDimensions from '../../hooks/WindowDimensions';
import { capitalize, shortenDate, truncateBetween } from '../../utils/Helpers';
import { IEventsTableProps } from '../../utils/Types';

const EventsTable = (props: IEventsTableProps) => {
  const { width } = useWindowDimensions();

  const headers: Array<string> =
    width > 900
      ? ['Date', 'Type', 'Block Number', 'Transaction Hash', 'Amount']
      : ['Date', 'Type', 'TX', 'Amount'];

  return (
    <>
      <table className="table-auto w-full" id="myTable">
        <thead className="border-b-[2px]">
          <tr>
            {(props.headers ? props.headers : headers).map((header, i) => (
              <th className="text-left" key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((event, i) => (
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
									${event.type === 'burn' ? `bg-red-200 text-black` : `bg-green-200 text-black`}
								`}
                >
                  {capitalize(event.type)}
                </div>
              </td>
              {width > 900 && <td>{event.blockNumber}</td>}
              <td>
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
                  ? utils.formatUnits(
                      BigNumber.from(event.returnValues.value),
                      8
                    )
                  : parseFloat(
                      utils.formatUnits(
                        BigNumber.from(event.returnValues.value),
                        8
                      )
                    ).toFixed(3)}{' '}
                BTC
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>
        {`
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
