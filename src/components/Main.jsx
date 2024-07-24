import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);

const Main = () => {
  const data = [
    { id: 10, title: 'Показатель A' },
    { id: 20, title: 'Показатель B' },
    { id: 30, title: 'Показатель C' },
    { id: 40, title: 'Показатель D' },
    { id: 50, title: 'Показатель E' },
    { id: 60, title: 'Показатель F' },
    { id: 70, title: 'Показатель G' }
  ];

  const chartData = {
    labels: data.map(stat => stat.title),
    datasets: [{
      label: 'Статистика по показателям',
      data: data.map(stat => stat.id),
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  };

  return (
    <div>
      <h2>Главная со статистикой</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default Main;