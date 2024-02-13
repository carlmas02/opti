import React from "react";
import Cards from "./Cards";
import { useState } from "react";
import RawMaterials from "./Dashboard/RawMaterials";
import Products from "./Dashboard/Products";
import Suppliers from "./Dashboard/Suppliers";
import CustomerCard from "./CustomerCard";
import Customers from "./Dashboard/Customers";
import Orders from "./Dashboard/Orders";

const Sidebar = ({ handleOptionClick }) => {
  return (
    <div className="bg-gray-800 text-white h-full w-64 flex flex-col">
      <div className="p-4 bg-gray-900">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <div className="flex-grow">
        <ul className="py-4">
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
    <div className="flex-grow bg-gray-200">
      {selectedOption === "Inventory" && <Cards />}
      {selectedOption === "Raw Materials" && <RawMaterials />}
      {selectedOption === "Products" && <Products />}
      {selectedOption === "Suppliers" && <Suppliers />}
      {selectedOption === "Customers" && <Customers />}
      {selectedOption === "Orders" && <Orders />}

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

const data = {
  products: {
    Debring: {
      thickness: 2.45,
      lenght: 50.0,
      raw_material: "steel_rod_drs",
      price: 2,
    },
    Caplock: {
      thickness: 1.35,
      lenght: 10.0,
      raw_material: "steel_rod_uw_1x",
      price: 2,
    },
    "Torsion Spring": {
      thickness: 2.25,
      lenght: 40.0,
      raw_material: "steel_rod_trsp",
      price: 2,
    },
    "Compression Spring": {
      thickness: 5.0,
      lenght: 20.0,
      raw_material: "spring_rod_5x",
      price: 3,
    },
    "Security Metre Wire": {
      thickness: 1.35,
      lenght: 100.0,
      raw_material: "steel_rod_uw_1x",
      price: 5,
    },
    "IC Lock Cover": {
      thickness: 5.0,
      lenght: 100.0,
      raw_material: "plastic_pls_5x",
      price: 15,
    },
    "Test Product": {
      thickness: 2.25,
      lenght: 40.0,
      raw_material: "test_material",
      price: 2,
    },
  },
  raw_materials: {
    steel_rod_drs: {
      thickness: 2.45,
      lenght: 500.0,
      price: 3,
      supplier: "Donkoth Steel Suppliers",
    },
    steel_rod_uw_1x: {
      thickness: 1.35,
      lenght: 100.0,
      price: 2,
      supplier: "M U Steel Traders",
    },
    steel_rod_trsp: {
      thickness: 2.25,
      lenght: 500.0,
      price: 3,
      supplier: "Donkoth Steel Suppliers",
    },
    spring_rod_5x: {
      thickness: 5.0,
      lenght: 500.0,
      price: 20,
      supplier: "Mahima Steels",
    },
    plastic_pls_5x: {
      thickness: 5.0,
      lenght: 100.0,
      price: 6,
      supplier: "KK Plastics",
    },
    test_material: {
      thickness: 2.25,
      lenght: 500.0,
      price: 3,
      supplier: "Test Supplier",
    },
  },
  suppliers: {
    "Donkoth Steel Suppliers": {
      address: "Andheri",
      contact: "9136288010",
      email: "donkothsteelsuppliers@gmail.com",
    },
    "M U Steel Traders": {
      address: "Kandivali",
      contact: "9892499866",
      email: "musteeltraders@gmail.com",
    },
    "Mahima Steels": {
      address: "Kumbharwada",
      contact: "9804056359",
      email: "mahimasteels@gmail.com",
    },
    "KK Plastics": {
      address: "Malad",
      contact: "9024561879",
      email: "kkplastics@gmail.com",
    },
    "Test Supplier": {
      address: "Test City",
      contact: "0123456789",
      email: "test@email.com",
    },
  },
  inventory: {
    Debring: 1000,
    Caplock: 1000,
    "Torsion Spring": 1000,
    "Compression Spring": 1000,
    "Security Metre Wire": 1000,
    "IC Lock Cover": 1000,
    "Test Product": 1000,
  },
  warehouse: {
    steel_rod_drs: 100,
    steel_rod_uw_1x: 100,
    steel_rod_trsp: 100,
    spring_rod_5x: 100,
    plastic_pls_5x: 100,
    test_material: 100,
  },
};

// const Dashboard = () => {
//   return (
//     <div className="w-full py-16 px-4 text-white">
//       <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
//         <div className="lg:col-span-2">
//           <h1 className="sm:text-xl font-bold py-2 md:text-2xl text-lg">
//             Want To Optimize Your Flow ?
//           </h1>
//           <p>Sign up and stay up to date.</p>
//         </div>
//         <div className='my-4'>
//           <div className="flex flex-col sm:flex-row w-full items-center justify-between">
//             <input
//               type="email"
//               placeholder="Enter Email"
//               className="rounded-md flex w-full p-2 "
//             />
//             <button className="bg-[#3339b4] sm:flex-row items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2 ml-4 font-medium rounded-md">
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
