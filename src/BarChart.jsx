import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,  
  Tooltip,
  Legend
);

// BarChart.jsx
const BarChart = ({ chartData, chartOptions }) => {
  return (
    <>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

export default BarChart;