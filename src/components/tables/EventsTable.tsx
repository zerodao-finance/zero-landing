import { BigNumber, utils } from 'ethers';

import { IEventsTableProps } from '../../utils/Types';

const EventsTable = (props: IEventsTableProps) => {
  return (
    <table className="table-auto w-full">
      <thead className="border-b-[2px]">
        <tr>
          {props.headers.map((header, i) => (
            <th className="text-left" key={i}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((event, i) => (
          <tr key={i}>
            <td>{new Date(event.timestamp).toLocaleDateString()}</td>
            <td>{event.type}</td>
            <td>
              {utils.formatUnits(BigNumber.from(event.returnValues.value), 8)}{' '}
              BTC
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { EventsTable };
