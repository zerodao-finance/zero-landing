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

    console.log(result);

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
