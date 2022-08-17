import { IBarChartProps } from './types/Charts';
import { IEventProps } from './types/Events';
import { IFormattedTxProps, IGraphChains } from './types/GraphData';

// Charts && Tables
export function eventsToBarChart(
  events: Array<IFormattedTxProps>,
  sorted: boolean
) {
  if (events && events.length > 0) {
    const holder: any = {};

    events.forEach(function (d) {
      if (Object.prototype.hasOwnProperty.call(holder, d.timestamp)) {
        holder[d.timestamp] =
          parseFloat(holder[d.timestamp]) + parseFloat(d.amount);
      } else {
        holder[d.timestamp] = parseFloat(d.amount);
      }
    });

    let final: Array<IBarChartProps> = [];

    Object.keys(holder).forEach((k) => {
      final.push({ name: k, amt: parseFloat(holder[k]).toFixed(6) });
    });

    if (sorted) {
      final = final.sort(
        (a: any, b: any) =>
          new Date(a.name).valueOf() - new Date(b.name).valueOf()
      );
    }

    return final;
  }
  return [];
}

export function filterEventByType(
  type: string,
  events: Array<IEventProps | any>
) {
  switch (type.toLowerCase()) {
    case 'mint':
      return events.filter((el) => el.type === 'mint');
    case 'burn':
      return events.filter((el) => el.type === 'burn');
    default:
      return events;
  }
}

export function filterByDate(
  events: Array<IEventProps | any>,
  direction: string = 'desc'
) {
  switch (direction.toLowerCase()) {
    case 'asc':
      return events.sort(
        (a, b) =>
          new Date(a.timestamp).valueOf() - new Date(b.timestamp).valueOf()
      );
    case 'desc':
      return events.sort(
        (a, b) =>
          new Date(b.timestamp).valueOf() - new Date(a.timestamp).valueOf()
      );
    default:
      return events;
  }
}

export function determineExplorer(chain: IGraphChains) {
  switch (chain) {
    case 'avax':
      return 'https://snowtrace.io/';
    case 'matic':
      return 'https://polygonscan.com/';
    case 'arb':
      return 'https://arbiscan.io/';
    default:
      return 'https://etherscan.io/';
  }
}

// Typography
export function truncateBetween(
  string: string | undefined,
  width: number,
  numberShown = 5
) {
  if (string) {
    const first = string.substring(0, numberShown);
    const last = string.substring(string.length - numberShown, string.length);
    return first + (width > 900 ? '...' : '..') + last;
  }
  return '';
}

export function truncate(
  string: string | undefined,
  numberShown = 120,
  withDots = true
) {
  if (string) {
    const shown = string.substring(0, numberShown || string.length);
    return withDots
      ? string.length > numberShown
        ? `${shown}...`
        : shown
      : shown;
  }
  return '';
}

export function capitalize(string: string | undefined) {
  if (string) {
    const first = string.substring(0, 1);
    const last = string.substring(1, string.length);
    return first.toUpperCase() + last;
  }
  return '';
}

// Dates
export function shortenDate(date: string) {
  const split = new Date(date).toLocaleDateString().split('/');
  const final = `${split[0]}/${split[1]}/${split[2]?.substring(
    2,
    split[2]?.length
  )}`;
  return final;
}

// Arrays
export function removeDuplicates(arr: Array<any>, prop: string) {
  const final = arr.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t[prop] === value[prop])
  );
  return final;
}

export function spliceIntoChunks(arr: Array<any>, chunkSize: number = 20) {
  const res = [];
  while (arr && arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}
