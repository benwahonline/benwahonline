import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);

export default function Stats() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('/stats').then(res => res.json()).then(data => setTotal(data.total));
  }, []);

  const data = {
    labels: ['Missing'],
    datasets: [{ label: 'Cases', data: [total], backgroundColor: '#0d6efd' }]
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-3">Statistics</h1>
      <Bar data={data} />
    </div>
  );
}
