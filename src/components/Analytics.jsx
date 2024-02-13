import React from "react";
import Supply from "../assets/Supply.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Supply} alt="supply" />
        <div className="flex-col pt-0 lg:pt-8 mx-auto">
          <p className="font-bold text-4xl  p-4 text-[#1f247b]">
            Supply Chain Dashboard
          </p>
          <h1 className="p-4 text-[#1f247b] text-justify ">
            Our dashboard provides real-time updates on inventory levels, order
            statuses, production schedules, and logistics movements. Monitor key
            performance indicators (KPIs) and track metrics to measure the
            efficiency and effectiveness of your supply chain processes.
            Visualize complex data through intuitive charts, graphs, and
            customizable reports.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
