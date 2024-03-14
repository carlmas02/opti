import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { BarChart, Bar } from "recharts";

const MultiBarGraph = ({ data }) => {
  let chartData;
  if (data) {
    chartData = Object.keys(data).map((year) => ({
      year,
      orders: data[year].orders,
      sales: data[year].sales,
      customers: data[year].customers,
      purchase: data[year].purchase,
      profit: data[year].profit,
    }));
  }

  return (
    <BarChart
      style={{ background: "white" }}
      width={600}
      height={400}
      data={chartData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="orders" fill="#8884d8" name="Orders" />
      <Bar dataKey="sales" fill="#82ca9d" name="Sales" />
      <Bar dataKey="customers" fill="#ffc658" name="Customers" />
      <Bar dataKey="purchase" fill="#ff7300" name="Purchase" />
      <Bar dataKey="profit" fill="#0088aa" name="Profit" />
    </BarChart>
  );
};

const SalesChart = ({ data }) => {
  console.log(data?.sales?.graph);
  let salesData;
  if (data?.sales?.graph) {
    salesData = Object.keys(data?.sales?.graph).map((year) => ({
      year,
      orders: data.sales.graph[year].orders,
      sales: data.sales.graph[year].sales,
    }));
  }
  console.log(salesData);
  return (
    // <h1></h1>
    <ResponsiveContainer
      style={{ background: "white" }}
      width={650}
      height={400}
    >
      <LineChart data={salesData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const ProductChart = ({ data }) => {
  console.log(data);
  let productData;
  if (data?.product?.graph) {
    productData = Object.keys(data?.product?.graph).map((year) => ({
      year,
      debring: data.product.graph[year].debring,
      caplock: data.product.graph[year].caplock,
      torsion_spring: data.product.graph[year].torsion_spring,
      compression_spring: data.product.graph[year].compression_spring,
      security_metre_wire: data.product.graph[year].security_metre_wire,
      ic_lock_cover: data.product.graph[year].ic_lock_cover,
    }));
    console.log(productData);
  }

  return (
    <LineChart
      width={1286}
      height={300}
      data={productData}
      style={{ background: "white", marginLeft: "1rem" }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="debring"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="caplock" stroke="#82ca9d" />
      <Line type="monotone" dataKey="torsion_spring" stroke="#ffc658" />
      <Line type="monotone" dataKey="compression_spring" stroke="#ff7300" />
      <Line type="monotone" dataKey="security_metre_wire" stroke="#0088aa" />
      <Line type="monotone" dataKey="ic_lock_cover" stroke="#00aa00" />
    </LineChart>
  );
};

const YearlyInsights = () => {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/history/");
        setHistoryData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!historyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 ml-4 my-2">
        Sales Insights for past 3 Years{" "}
      </h2>

      <div className="flex ml-4">
        <div className="w-1/2 ">
          <SalesChart data={historyData} />
        </div>
        <div className=" ml-4 w-1/2">
          <MultiBarGraph data={historyData?.sales?.graph} />
        </div>
      </div>

      <h2 className="text-lg font-medium text-gray-900 ml-4 my-2">
        Product Sales for the past 3 Years
      </h2>
      <div className="pb-4">
        <ProductChart data={historyData} />
      </div>
    </div>
  );
};

export default YearlyInsights;
