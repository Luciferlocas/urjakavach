"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Weekends", "Other Days"],
    datasets: [
      {
        data: [6600, 5200],
        backgroundColor: ["#006fee", "rgba(54, 162, 235, 0.8)"],
        borderColor: ["transparent", "transparent"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        display: false,
      },
      title: {
        display: false,
      },
    },
    radius: "70%",
  };

  return (
    <div className="w-2/3">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
