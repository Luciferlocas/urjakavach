"use client";

import LineChart from "@/components/graphs/LineChart";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React, { useState } from "react";
import Star from "@/assets/icons/Star";
import { DeleteIcon } from "@/assets/icons/DeleteIcon";

const Dashboard = () => {
  const date = new Date().toDateString();
  const [weekday, month, day] = date.split(" ");
  const format = `${weekday}, ${month} ${day}`;
  const [refresh, setRefresh] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

  const perediction = [
    {
      date: "Tue, Sep 03",
      max: 4928,
      min: 3824,
    },
    {
      date: "Wed, Sep 04",
      max: 6015,
      min: 4237,
    },
    {
      date: "Thu, Sep 05",
      max: 7354,
      min: 3192,
    },
    {
      date: "Fri, Sep 06",
      max: 8110,
      min: 4525,
    },
    {
      date: "Sat, Sep 07",
      max: 9204,
      min: 2843,
    },
    {
      date: "Sun, Sep 08",
      max: 6732,
      min: 5487,
    },
    {
      date: "Mon, Sep 09",
      max: 8521,
      min: 2951,
    },
    {
      date: "Tue, Sep 10",
      max: 7521,
      min: 4951,
    },
    {
      date: "Wed, Sep 11",
      max: 6521,
      min: 2951,
    },
  ];

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <Card className="w-full min-h-24 shadow-sm">
          <CardHeader>
            <span className="font-bold">Current Load</span>
          </CardHeader>
          <CardBody className="text-5xl font-extrabold flex">
            <p>
              5737 <span className="text-xl">MW</span>
            </p>
          </CardBody>
          <CardFooter>
            <span className="text-sm text-[#FFA500]">
              It will update every 45 seconds
            </span>
          </CardFooter>
        </Card>
        <Card className="w-full min-h-24 shadow-sm">
          <CardHeader>
            <span className="font-bold">Max Load</span>
          </CardHeader>
          <CardBody className="text-5xl font-extrabold flex">
            <p>
              6325 <span className="text-xl">MW</span>
            </p>
          </CardBody>
          <CardFooter>
            <span className="text-sm text-[#FFA500]">
             {"Yesterday's max load was 6570 MW"}
            </span>
          </CardFooter>
        </Card>
        <Card className="w-full min-h-24 shadow-sm">
          <CardHeader>
            <span className="font-bold">Min Load</span>
          </CardHeader>
          <CardBody className="text-5xl font-extrabold flex">
            <p>
              4585 <span className="text-xl">MW</span>
            </p>
          </CardBody>
          <CardFooter>
            <span className="text-sm text-[#FFA500]">
              {"Yesterday's min load was 4342 MW"}
            </span>
          </CardFooter>
        </Card>
        <Card className="w-full min-h-24 shadow-sm">
          <CardHeader>
            <span className="font-bold">Power</span>
          </CardHeader>
          <CardBody>
            <div className="flex gap-2 justify-around">
              <div className="flex flex-col gap-2 items-center">
                <h1 className="font-semibold">Schedule</h1>
                <span className="text-xl font-extrabold">
                  5196 <span className="text-sm font-semibold">MW</span>
                </span>
              </div>
              <Divider orientation="vertical" className="w-[1px] bg-black" />
              <div className="flex flex-col gap-2 items-center">
                <h1 className="font-semibold">Drawl</h1>
                <span className="text-xl font-extrabold">
                  5199 <span className="text-sm font-semibold">MW</span>
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5 flex flex-col gap-4">
          <Card className="min-h-24 shadow-sm">
            <CardHeader className="flex justify-between items-start">
              <span className="font-bold">{format}</span>
              <span className="text-xs font-bold">*Prediction</span>
            </CardHeader>
            <CardBody>
              <LineChart />
            </CardBody>
          </Card>
          <div className="flex gap-4">
            <Card className="w-full min-h-24 shadow-sm">
              <CardHeader>
                <span className="font-bold">Frequency</span>
              </CardHeader>
              <CardBody className="text-4xl text-[#734A00] font-bold flex">
                <p>
                  50.06 <span className="text-xl">Hz</span>
                </p>
              </CardBody>
            </Card>
            <Card className="w-full min-h-24 shadow-sm">
              <CardHeader>
                <span className="font-bold">UI Rate</span>
              </CardHeader>
              <CardBody className="text-4xl text-[#734A00] font-bold flex">
                <p>
                  401 <span className="text-xl">paise/kWh</span>
                </p>
              </CardBody>
            </Card>
          </div>
          <Card className="min-h-24 shadow-sm">
            <CardHeader className="flex justify-between items-start">
              <span className="font-bold">Top stats</span>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="bg-gradient-to-r from-[#FFA500] to-white p-2 flex justify-between rounded-lg">
                  <span className="font-semibold">BRPL</span>
                  <span className="text-sm">2726 MW</span>
                </div>
                <div className="bg-gradient-to-r from-[#FFA500] to-white p-2 flex justify-between rounded-lg w-3/4">
                  <span className="font-semibold">NDPL</span>
                  <span className="text-sm">1931 MW</span>
                </div>
                <div className="bg-gradient-to-r from-[#FFA500] to-white p-2 flex justify-between rounded-lg w-3/5">
                  <span className="font-semibold">BYPL</span>
                  <span className="text-sm">1486 MW</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <Card className="shadow-sm col-span-7">
          <CardHeader className="flex justify-between items-start">
            <span className="font-bold">Future analysis</span>
            <span className="text-xs font-bold">*Prediction</span>
          </CardHeader>
          <CardBody className="p-4 max-h-[40rem]">
            {perediction.map((item, i) => (
              <div
                key={i}
                className="flex justify-between p-4 rounded-xl group hover:bg-[#FFF7E8] cursor-pointer"
              >
                <div className="flex gap-4 items-start">
                  <Avatar src="/logo.svg" />
                  <div className="flex flex-col">
                    <h1 className="font-bold">{item.date}</h1>
                    <span className="text-xs text-[#FFA500]">
                      {item.max} / {item.min} in MW
                    </span>
                  </div>
                </div>
                <div className="gap-4 items-center justify-center group-hover:flex hidden">
                  <Star />
                  <Divider orientation="vertical" />
                  <DeleteIcon />
                </div>
              </div>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
