import { FC } from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { List } from '../store/forecast/types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
};

type ForecastBarProps = {
  forecastData: List[];
};

export const ForecastBar: FC<ForecastBarProps> = ({ forecastData }) => {
  const temperature = forecastData.map((item) => item.main.temp);
  const time = forecastData.map((item) => new Date(item.dt_txt).getHours());

  const data = {
    temperature,
    datasets: [
      {
        label: 'Forecast',
        data: time,
        backgroundColor: 'rgb(32, 178, 170)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
