import { LineChart } from "recharts";
import LineDataChart from "../Charts/Line";
import StackedBarChartComponent from "../Charts/StackedBarCh";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PieChartComponent from "../Charts/PieChart";
import SimpleBarChart from "../Charts/SimpleBarChart";

const Home = () => {
  const [lineChartData, setLineChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/dashboard/");
        console.log(response.data, "see");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex  px-5 ">
        <div className="w-full bg-white text-black shadow-inner shadow-slate-400 rounded-lg  p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#c61717] font-semibold  py-2  "> Customers </h2>
          <p className="text-center  text-[#4F46E5] text-xl font-bold">
            {data.customers}
          </p>
          <p className="text-center text-sm text-slate-400"> </p>
        </div>
        <div className="w-full text-black   bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#b651d4] font-semibold  py-4  ">
            {" "}
            Gross Revenue{" "}
          </h2>
          <p className="text-center text-[#4F46E5] text-xl font-bold">
            {data.gross_revenue}
          </p>
        </div>
        <div className="w-full text-black   bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#5e96df] font-semibold  py-4  ">
            {" "}
            Net Revenue{" "}
          </h2>
          <p className="text-center text-[#4F46E5] text-xl font-bold">
            {data.net_revenue}
          </p>
        </div>
        <div className="w-full text-black   bg-white shadow-inner shadow-slate-400 rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <h2 className=" text-[#61d55a] font-semibold  py-4  "> Orders </h2>
          <p className="text-center text-xl text-[#4F46E5] font-bold">
            {data.orders}
          </p>
        </div>
      </div>

      <div className="ml-6 mb-2 text-md font-bold text-gray-900">
        Quaterly Order display
      </div>
      <div className="flex ml-6">
        <div className="w-1/2 mr-4">
          <LineDataChart data={data?.sales.graph} />
        </div>
        <div className="w-1/2">
          <StackedBarChartComponent data={data?.product.graph} />
        </div>
      </div>

      <div className="ml-6 my-2 text-md font-bold text-gray-900">
        Yearly Order display
      </div>
      <div className="flex ml-6">
        <div className="w-1/2 mr-4">
          <SimpleBarChart data={data?.yearly_sales.graph} />
          {/* <StackedBarChartComponent data={data?.yearly_sales.graph} /> */}
        </div>
        <div className="w-1/2">
          <PieChartComponent data={data?.yearly_product.graph} />
          {/* <StackedBarChartComponent data={data?.yearly_product.graph} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
