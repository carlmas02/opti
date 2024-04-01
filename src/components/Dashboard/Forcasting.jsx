import React from "react";
import {
  Label,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

const data1 = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 30 },
  { name: "D", value: 40 },
];

const dataDebring = [
  { month: "Jan", units: 19645 },
  { month: "Feb", units: 9137 },
  { month: "Mar", units: 20200 },
  { month: "Apr", units: 22265 },
  { month: "May", units: 8293 },
  { month: "Jun", units: 18168 },
  { month: "Jul", units: 14523 },
  { month: "Aug", units: 12792 },
  { month: "Sep", units: 9664 },
  { month: "Oct", units: 23262 },
  { month: "Nov", units: 10355 },
  { month: "Dec", units: 20799 },
];

const dataCapLock = [
  { month: "Jan", units: 12174 },
  { month: "Feb", units: 10446 },
  { month: "Mar", units: 18990 },
  { month: "Apr", units: 10976 },
  { month: "May", units: 6680 },
  { month: "Jun", units: 11519 },
  { month: "Jul", units: 18229 },
  { month: "Aug", units: 11180 },
  { month: "Sep", units: 6019 },
  { month: "Oct", units: 10565 },
  { month: "Nov", units: 17746 },
  { month: "Dec", units: 10500 },
];

const dataTorsionSpring = [
  { month: "Jan", units: 36446 },
  { month: "Feb", units: 36725 },
  { month: "Mar", units: 43361 },
  { month: "Apr", units: 35745 },
  { month: "May", units: 40547 },
  { month: "Jun", units: 55286 },
  { month: "Jul", units: 27731 },
  { month: "Aug", units: 27252 },
  { month: "Sep", units: 77578 },
  { month: "Oct", units: 21626 },
  { month: "Nov", units: 37431 },
  { month: "Dec", units: 27901 },
];

const dataCompressionSpring = [
  { month: "Jan", units: 32671 },
  { month: "Feb", units: 36837 },
  { month: "Mar", units: 29092 },
  { month: "Apr", units: 12827 },
  { month: "May", units: 33294 },
  { month: "Jun", units: 24502 },
  { month: "Jul", units: 16554 },
  { month: "Aug", units: 31042 },
  { month: "Sep", units: 16417 },
  { month: "Oct", units: 29521 },
  { month: "Nov", units: 39914 },
  { month: "Dec", units: 29208 },
];

const dataSecurityMetreWire = [
  { month: "Jan", units: 9286 },
  { month: "Feb", units: 2513 },
  { month: "Mar", units: 4687 },
  { month: "Apr", units: 11603 },
  { month: "May", units: 15734 },
  { month: "Jun", units: 5274 },
  { month: "Jul", units: 577 },
  { month: "Aug", units: 5083 },
  { month: "Sep", units: 12251 },
  { month: "Oct", units: 2662 },
  { month: "Nov", units: 5598 },
  { month: "Dec", units: 6894 },
];

const dataICLockWire = [
  { month: "Jan", units: 414 },
  { month: "Feb", units: 185 },
  { month: "Mar", units: 349 },
  { month: "Apr", units: 407 },
  { month: "May", units: 322 },
  { month: "Jun", units: 27 },
  { month: "Jul", units: 365 },
  { month: "Aug", units: 533 },
  { month: "Sep", units: 402 },
  { month: "Oct", units: 685 },
  { month: "Nov", units: 500 },
  { month: "Dec", units: 586 },
];

const salesData = [
  { month: "Jan", sales: 288313 },
  { month: "Feb", sales: 315088 },
  { month: "Mar", sales: 296631 },
  { month: "Apr", sales: 278373 },
  { month: "May", sales: 291015 },
  { month: "Jun", sales: 306766 },
  { month: "Jul", sales: 313720 },
  { month: "Aug", sales: 276616 },
  { month: "Sep", sales: 314080 },
  { month: "Oct", sales: 305260 },
  { month: "Nov", sales: 319010 },
  { month: "Dec", sales: 296734 },
];

const purchaseData = [
  { month: "Jan", purchase: 288313 },
  { month: "Feb", purchase: 315088 },
  { month: "Mar", purchase: 296631 },
  { month: "Apr", purchase: 278373 },
  { month: "May", purchase: 291015 },
  { month: "Jun", purchase: 306766 },
  { month: "Jul", purchase: 313720 },
  { month: "Aug", purchase: 276616 },
  { month: "Sep", purchase: 314080 },
  { month: "Oct", purchase: 305260 },
  { month: "Nov", purchase: 319010 },
  { month: "Dec", purchase: 296734 },
];

const Forcasting = () => {
  return (
    <div className="pl-2 py-5">
      <h2 className="text-lg font-medium pl-2 text-gray-900 pb-2">
        Demand Forecasting for the Products
      </h2>

      <div className="flex flex-wrap justify-center gap-8  max-w-[70vw]">
        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Sales Prediction</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={salesData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Purchase Prediction</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={purchaseData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="purchase" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Debring</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={dataDebring}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Caplock</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={dataCapLock}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Torsion Spring</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={dataTorsionSpring}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Compression Spring</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={dataCompressionSpring}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">Security Metre Wire</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={dataSecurityMetreWire}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>

        <div className="bg-white p-2 rounded-md">
          <h2 className="text-lg font-semibold mb-4">IC Lock Cover</h2>
          <div style={{ width: "100%", height: "300px" }}>
            <LineChart width={560} height={300} data={dataICLockWire}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="month">
                <Label value="Month" position="bottom" />
              </XAxis>
              <YAxis>
                <Label value="Units" angle={-90} position="insideLeft" />
              </YAxis>
              <Tooltip />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forcasting;
