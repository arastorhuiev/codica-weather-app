import { FC } from 'react';

import { List } from '../store/forecast/types';

import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
  {
    temperature: 25,
    time: -5,
  },
  {
    temperature: 9,
    time: -10,
  },
  {
    temperature: 6,
    time: -30,
  },
  {
    temperature: 3,
    time: 20,
  },
  {
    temperature: 10,
    time: 25,
  },
  {
    temperature: 2,
    time: 15,
  },
  {
    temperature: 10,
    time: 14,
  },
];

type ForecastBarProps = {
  forecastData: List[];
};

export const ForecastBar: FC<ForecastBarProps> = ({ forecastData }) => {
  const temperature = forecastData.map((item) => item.main.temp);
  const time = forecastData.map((item) => new Date(item.dt_txt).getHours());

  return (
    <>
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <XAxis dataKey='temperature' />
        <YAxis />
        <Bar dataKey='time' barSize={100} fill='#8884d8' />
      </BarChart>
    </>
  );
};
