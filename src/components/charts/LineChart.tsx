import React from 'react';

import { Area, AreaChart, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { IBarChartProps } from '../../utils/Types';
import CustomTooltip from './CustomTooltip';

type ILineProps = {
  data: Array<IBarChartProps>;
};

const ResponsiveLineChart = (props: ILineProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart
        width={500}
        height={300}
        data={props.data || []}
        syncId="anyId"
      >
        <XAxis dataKey="name" />
        <Tooltip content={<CustomTooltip />} />
        <Area type="monotone" dataKey="amt" stroke="#41a75b" fill="#368e4c" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export { ResponsiveLineChart };
