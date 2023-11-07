import { Line } from 'react-chartjs-2';

import React, { useState } from 'react';
import Sidebar from '../component/Sidebar'; 
import './dataTable.css'; 

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


// Register the components needed for the line chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Data = () => {
  const [urls, setUrls] = useState([
    // This would normally be fetched from a server
    { id: 1, originalUrl: 'http://example.com', shortUrl: 'http://exmpl.co/abc', hits: 150 },
    { id: 2, originalUrl: 'http://anotherexample.com', shortUrl: 'http://aexmpl.co/def', hits: 85 },
    // Add as many URL objects as needed
  ]);
  const chartData = {
    labels: urls.map(url => `ID ${url.id}`), // x-axis labels
    datasets: [
      {
        label: 'Hits',
        data: urls.map(url => url.hits), // y-axis data
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // If you wish to display the legend
      },
      title: {
        display: true,
        text: 'URL Hits',
      },
    },
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="data-content">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Original URL</th>
              <th>Short URL</th>
              <th>Hits</th>
            </tr>
          </thead>
          <tbody>
            {urls.map((url) => (
              <tr key={url.id}>
                <td>{url.id}</td>
                <td>{url.originalUrl}</td>
                <td>{url.shortUrl}</td>
                <td>{url.hits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="chart-container">
  <Line data={chartData} options={chartOptions} />
      </div>
        
    </div>
  );
};

export default Data;

