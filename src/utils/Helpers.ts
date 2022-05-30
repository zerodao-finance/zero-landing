import { IBarChartProps, IEventProps } from './Types';

export function eventsToBarChart(events: Array<IEventProps>, sorted: boolean) {
  // TODO: Optimize
  if (events && events.length > 0) {
    const result: Array<IBarChartProps> = Object.values(
      events.reduce((r: any, e: any) => {
        const k = e.timestamp?.toString() || '';
        if (!r[k]) {
          r[k] = {
            name: e.timestamp?.toString(),
            amt: parseInt(e.returnValues.value, 10),
          };
        } else {
          r[k].amt = r[k].amt === 'NaN' ? 0 : parseInt(r[k].amt, 10);
        }
        return r;
      }, {})
    );

    const divided = result
      .filter((el) => el.amt.toString() !== 'NaN')
      .map((el) => {
        return {
          name: el.name.substring(4),
          amt: (el.amt /= 10 ** 8),
        };
      });

    if (sorted) {
      const final = divided.sort(
        (a, b) => new Date(a.name).valueOf() - new Date(b.name).valueOf()
      );
      return final;
    }
    return divided;
  }
  return [];
}

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

export function capitalize(string: string | undefined) {
  if (string) {
    const first = string.substring(0, 1);
    const last = string.substring(1, string.length);
    return first.toUpperCase() + last;
  }
  return '';
}

export function shortenDate(date: string) {
  const split = new Date(date).toLocaleDateString().split('/');
  const final = `${split[0]}/${split[1]}/${split[2]?.substring(
    2,
    split[2]?.length
  )}`;
  return final;
}
