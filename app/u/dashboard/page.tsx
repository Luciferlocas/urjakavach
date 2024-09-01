import LineChart from "@/components/graphs/LineChart";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import img from "@/assets/icons/graph.svg";
import PieChart from "@/components/graphs/PieChart";
import up from "@/assets/icons/up.svg"

const page = () => {
  const date = new Date().toDateString();
  const [weekday, month, day] = date.split(" ");
  const format = `${weekday}, ${month} ${day}`;

  const list = [
    {
      date: "31 Aug",
      peak_load: "4500 MW",
    },
    {
      date: "01 Sep",
      peak_load: "4600 MW",
    },
    {
      date: "02 Sep",
      peak_load: "4700 MW",
    },
    {
      date: "03 Sep",
      peak_load: "4550 MW",
    },
    {
      date: "04 Sep",
      peak_load: "4650 MW",
    },
    {
      date: "05 Sep",
      peak_load: "4750 MW",
    },
    {
      date: "06 Sep",
      peak_load: "4800 MW",
    },
  ];
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex gap-4 w-full">
        <Card className="w-full min-h-24 shadow-sm">
          <CardHeader>
            <span className="font-bold text-black/70">AI Prediction</span>
          </CardHeader>
        </Card>
        <Card className="min-w-96 min-h-24 shadow-sm">
          <CardHeader>
            <span className="font-bold text-black/70">Report Issue</span>
          </CardHeader>
        </Card>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-7 min-h-24 shadow-sm">
          <CardHeader className="flex justify-between items-start">
            <span className="font-bold text-black/70">{format}</span>
            <Image alt="graph" src={img} />
          </CardHeader>
          <CardBody className="flex flex-col gap-6">
            <div className="border-1 border-blue-100 p-2 rounded-xl classss">
              Peak Demand : {2500} MW
            </div>
            <LineChart />
          </CardBody>
        </Card>
        <Card className="col-span-5 min-h-24 shadow-sm">
          <CardHeader>
            <span className="font-bold text-black/70">Demand Analysis</span>
          </CardHeader>
          <CardBody className="flex flex-col gap-6 items-center justify-between py-4">
            <PieChart />
            <Card className="px-4 classss">
              <CardBody>
                <div className="flex gap-4">
                  <div className="flex justify-start gap-4">
                    <div className="bg-[#006fee] rounded-full w-3 h-3 mt-1"></div>
                    <div className="flex flex-col gap-2 items-center font-bold">
                      <span className="text-black/60">Weekends</span>
                      <span>57%</span>
                    </div>
                  </div>
                  <Divider orientation="vertical" />
                  <div className="flex justify-start gap-4">
                    <div className="bg-[#36a2ebcc] rounded-full w-3 h-3 mt-1"></div>
                    <div className="flex flex-col gap-2 items-center font-bold">
                      <span className="text-black/60">Week days</span>
                      <span>43%</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="font-bold text-black/70">
          Future analysis
        </CardHeader>
        <CardBody className="p-4 max-h-[40rem]">
          {list.map((item, i) => (
            <div
              key={i}
              className="rounded-xl hover:bg-white/90 hover:shadow-md cursor-pointer p-4 w-full"
            >
              <div className="flex justify-between items-center">
                <div className="flex justify-center items-center gap-4">
                  <Image
                    alt="graph"
                    src={img}
                    width={80}
                    className="rounded-md"
                  />
                  <span className="font-semibold">{item.peak_load}</span>
                </div>
                <Image alt="graph" src={up} />
                <h1 className="text-lg flex justify-between items-center">
                  {item.date}
                </h1>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
