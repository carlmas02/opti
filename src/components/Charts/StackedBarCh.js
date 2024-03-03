import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";

const StackedBarChartComponent = ({ data }) => {
  const [dataitems, setData] = useState();

  useEffect(() => {
    if (data) {
      const chartData = data
        ? Object.keys(data).map((month) => ({
            month: month,
            debring: data[month].debring,
            caplock: data[month].caplock,
            torsion_spring: data[month].torsion_spring,
            ic_lock_cover: data[month].ic_lock_cover,
            security_metre_wire: data[month].security_metre_wire,
            compression_spring: data[month].compression_spring,
          }))
        : [];
      setData(chartData);
    }
  }, [data]);

  return (
    <BarChart
      width={600}
      height={300}
      data={dataitems}
      barCategoryGap={5}
      style={{ background: "white" }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="debring" stackId="a" fill="#8884d8" />
      <Bar dataKey="caplock" stackId="a" fill="#82ca9d" />
      <Bar dataKey="torsion_spring" stackId="a" fill="#ffc658" />
      <Bar dataKey="compression_spring" stackId="a" fill="#ff7f0e" />
      <Bar dataKey="security_metre_wire" stackId="a" fill="#ff7300" />
      <Bar dataKey="ic_lock_cover" stackId="a" fill="#a7ffeb" />
    </BarChart>
  );
};

export default StackedBarChartComponent;
