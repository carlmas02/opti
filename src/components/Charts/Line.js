import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineDataChart = ({ data }) => {
  const [dataitems, setData] = useState();

  useEffect(() => {
    if (data) {
      const chartData = data
        ? Object.keys(data).map((month) => ({
            month: month,
            orders: data[month].orders,
            sales: data[month].sales,
            profit: data[month].profit,
          }))
        : [];
      setData(chartData);
    }
  }, [data]);

  console.log(data);
  return (
    <LineChart
      width={600}
      height={300}
      data={dataitems}
      style={{ backgroundColor: "white" }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="orders" stroke="#8884d8" name="Orders" />
      <Line type="monotone" dataKey="sales" stroke="#82ca9d" name="Sales" />
      <Line type="monotone" dataKey="profit" stroke="#ffc658" name="Profit" />
    </LineChart>
  );
};

export default LineDataChart;
