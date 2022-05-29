import React from 'react';

import { Area, AreaChart, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

import { IBarChartProps } from '../../utils/Types';
import CustomTooltip from './CustomTooltip';

type IBarProps = {
  data: Array<IBarChartProps>;
};

const ResponsiveBarChart = (props: IBarProps) => {
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
        <Area type="monotone" dataKey="amt" stroke="#82ca9d" fill="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export { ResponsiveBarChart };
