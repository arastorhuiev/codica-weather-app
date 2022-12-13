import { FC } from 'react';

import { List } from '../store/forecast/types';

import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
} from 'recharts';

type ForecastBarProps = {
  forecastData: List[];
};

export const ForecastBar: FC<ForecastBarProps> = ({ forecastData }) => {
  const temperature = forecastData.map((item) => Math.round(item.main.temp));
  const time = forecastData.map((item) =>
    new Date(item.dt_txt).toLocaleString(),
  );

  const data = temperature.map((value, index) => {
    return {
      temperature: value,
      time: time[index],
    };
  });

  return (
    <AreaChart
      width={1000}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='time' />
      <YAxis />
      <Tooltip />
      <Area
        type='basis'
        dataKey='temperature'
        stroke='#BDB76B'
        fill='#F0E68C'
      />
    </AreaChart>
  );
};
