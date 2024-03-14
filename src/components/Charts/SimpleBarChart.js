import React from "react";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const SimpleBarChart = ({ data }) => {
  const [dataitems, setData] = useState();

  console.log(data);

  useEffect(() => {
    if (data) {
      const chartData = Object.keys(data).map((key) => ({
        name: key,
        value: data[key],
      }));
      setData(chartData);
    }
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart
        width={650}
        // height={260}
        style={{ background: "white" }}
        data={[data]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="orders" fill="#8884d8" name="Orders" />
        <Bar dataKey="sales" fill="#82ca9d" name="Sales" />
        <Bar dataKey="purchase" fill="#ffc658" name="Purchases" />
        <Bar dataKey="profit" fill="#ff7300" name="Profit" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
