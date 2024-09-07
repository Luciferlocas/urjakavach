"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: [
      "8 AM",
      "10 AM",
      "12 PM",
      "2 PM",
      "4 PM",
      "6 PM",
      "8 PM",
      "10 PM",
      "12 AM",
      "2 AM",
      "4 AM",
      "6 AM",
    ],
    datasets: [
      {
        label: "Peak Load (MW)",
        data: [4500, 4700, 4900, 5550, 5250, 4750, 4800, 4700, 4600, 4700, 4900],
        borderColor: "#FFCD71",
        backgroundColor: "#734A00",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line data={data} style={{height: "300px"}} options={options} />;
};

export default LineChart;
