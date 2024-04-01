import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import RawMaterials from "./Dashboard/RawMaterials";
import Products from "./Dashboard/Products";
import Suppliers from "./Dashboard/Suppliers";
import CustomerCard from "./CustomerCard";
import Customers from "./Dashboard/Customers";
import Orders from "./Dashboard/Orders";
import Home from "./Dashboard/Home";
import ProductManufacturing from "./Manufacturing/ProductManufacturing";
import RawMaterialsPurchase from "./RawMaterials/RawMaterialsPurchase";
import YearlyInsights from "./Dashboard/YearlyInsights";
import Forcasting from "./Dashboard/Forcasting";

const Sidebar = ({ handleOptionClick }) => {
  return (
    <div className="bg-gray-800 text-white h-full  w-52 flex flex-col">
      <div className="p-4 bg-gray-900">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="flex-grow">
        <ul className="py-4">
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Home")}
          >
            Home
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("YearlyInsights")}
          >
            Yearly Insights
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Forcasting")}
          >
            Forecasting
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Products")}
          >
            Products
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Raw Materials")}
          >
            Raw Materials
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Suppliers")}
          >
            Suppliers
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Warehouse")}
          >
            Warehouse
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Inventory")}
          >
            Inventory
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Customers")}
          >
            Customers
          </li>
          <li
            className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            onClick={() => handleOptionClick("Orders")}
          >
            Orders
          </li>
        </ul>
      </div>
      <div className="p-4 bg-gray-900">Footer</div>
    </div>
  );
};

const Mainbar = ({ selectedOption }) => {
  return (
    <div className="flex-grow h-screen overflow-y-scroll bg-gray-200">
      {selectedOption === "Home" && <Home />}
      {selectedOption === "Inventory" && <Cards />}
      {selectedOption === "Raw Materials" && <RawMaterialsPurchase />}
      {/* {selectedOption === "Products" && <Products />} */}
      {selectedOption === "Products" && <ProductManufacturing />}
      {selectedOption === "Suppliers" && <Suppliers />}
      {selectedOption === "Customers" && <Customers />}
      {selectedOption === "Orders" && <Orders />}
      {selectedOption === "YearlyInsights" && <YearlyInsights />}
      {selectedOption === "Forcasting" && <Forcasting />}

      {/* <RawMaterialsPurchase /> */}

      {/* Add other components or content here */}
    </div>
  );
};

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen">
      <Sidebar handleOptionClick={handleOptionClick} />
      <Mainbar selectedOption={selectedOption} />
    </div>
  );
};

export default Dashboard;
