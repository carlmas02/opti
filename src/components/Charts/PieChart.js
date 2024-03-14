import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const data = [
  { name: "debring", value: 20 },
  { name: "caplock", value: 15 },
  { name: "torsion_spring", value: 50 },
  { name: "compression_spring", value: 32 },
  { name: "security_metre_wire", value: 12 },
  { name: "ic_lock_cover", value: 6 },
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const PieChartComponent = ({ data }) => {
  const [dataitems, setData] = useState();

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
    <PieChart width={600} height={260} style={{ background: "white" }}>
      <Pie
        data={dataitems}
        cx={200}
        // cy={200}
        labelLine={true}
        outerRadius={80}
        dataKey="value"
      >
        {dataitems?.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default PieChartComponent;
