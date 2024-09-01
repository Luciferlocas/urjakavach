"use client";

import React from "react";
import { motion } from "framer-motion";

const Future = () => {
  const list = [
    {
      date: "2024-08-01",
      peak_load: "4500 MW",
    },
    {
      date: "2024-08-02",
      peak_load: "4600 MW",
    },
    {
      date: "2024-08-03",
      peak_load: "4700 MW",
    },
    {
      date: "2024-08-04",
      peak_load: "4550 MW",
    },
    {
      date: "2024-08-05",
      peak_load: "4650 MW",
    },
    {
      date: "2024-08-06",
      peak_load: "4750 MW",
    },
    {
      date: "2024-08-07",
      peak_load: "4800 MW",
    },
    {
      date: "2024-08-08",
      peak_load: "4900 MW",
    },
    {
      date: "2024-08-09",
      peak_load: "5000 MW",
    },
    {
      date: "2024-08-10",
      peak_load: "5100 MW",
    },
  ];
  return (
    <div className="flex gap-2 flex-col">
      {list.map((item, i) => (
        <motion.div
          key={i}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          className="rounded-[0.7rem] hover:bg-white/90 hover:shadow-xl cursor-pointer"
        >
          <h1 className="text-lg flex justify-between items-center">
            {item.date}
          </h1>
        </motion.div>
      ))}
    </div>
  );
};

export default Future;
