/* eslint-disable import/prefer-default-export */
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// eslint-disable-next-line import/no-unresolved
import { Line } from 'react-chartjs-2';
import { useAtom } from 'jotai';
import { datesAtom, weightsAtom } from './Store';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export function ProgressChart() {
  const [weights] = useAtom(weightsAtom);
  const [dates] = useAtom(datesAtom);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Peso',
        data: weights,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return <Line className="d-flex progress-chart" options={options} data={data} />;
}
