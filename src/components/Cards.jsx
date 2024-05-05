import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Dashspring from "../assets/Dashspring.jpeg";
import Rawmat from "../assets/Rawmat.jpeg";
import Supplier from "../assets/Supplier.jpeg";
import Warehouse from "../assets/Warehouse.jpeg";
import Inventory from "../assets/Inventory.jpeg";

// this is inventory
const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/store/");
        console.log(response.data.inventory);
        setProducts(response.data.inventory);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="w-full px-4 bg-white h-full">
      <h1 className="font-bold text-[#3339b4] font-serif p-2 text-center md:text-3xl sm:text-2xl text-lg md:py-6 sm:py-3">
        Inventory
      </h1>
      {/* row 1 PRODUCTS */}
      <div className="max-w-[1240px] mt-12 mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  gap-8">
        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Dashspring}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4 ">Debring</h2>
          <p className="text-center text-4xl font-bold">
            {products.Debring}
            <span className="text-xl"> units</span>
          </p>
        </div>

        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Dashspring}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4 ">Caplock</h2>
          <p className="text-center text-4xl font-bold">
            {products.Caplock}
            <span className="text-xl"> units</span>
          </p>
        </div>

        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Dashspring}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4 ">Torson</h2>
          <p className="text-center text-4xl font-bold">
            {products["Torsion Spring"]}
            <span className="text-xl"> units</span>
          </p>
        </div>

        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Dashspring}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4 ">Compression</h2>
          <p className="text-center text-4xl font-bold">
            {products["Compression Spring"]}
            <span className="text-xl"> units</span>
          </p>
        </div>

        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Dashspring}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4  ">Metre wire</h2>
          <p className="text-center text-4xl font-bold">
            {products["Security Metre Wire"]}
            <span className="text-xl"> units</span>
          </p>
        </div>
      </div>
      {/* row 2 */}
      {/* <div className="max-w-[1240px] mx-auto mt-16 grid md:grid-cols-2 gap-8">
        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto mt-[-3rem] bg-white"
            src={Rawmat}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4  ">
            {" "}
            Raw Materials{" "}
          </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">Product</p>
            <p className="py-2 border-b mx-8">Thickness</p>
            <p className="py-2 border-b mx-8">Attributes</p>
          </div>
          <button className="bg-[#3339b4] text-white mx-auto  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2  font-medium rounded-md">
            View more
          </button>
        </div>

        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className="w-28 mx-auto mt-[-3rem] bg-white"
            src={Supplier}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4  "> Supplier </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">Product</p>
            <p className="py-2 border-b mx-8">Address</p>
            <p className="py-2 border-b mx-8">Contact</p>
          </div>
          <button className="bg-[#3339b4] text-white mx-auto  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2  font-medium rounded-md">
            View more
          </button>
        </div>
      </div> */}
      {/* row 3 */}
      {/* <div className="max-w-[1240px] mt-16 mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className=" w-28 mx-auto mt-[-3rem] bg-white"
            src={Warehouse}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4  "> Warehouse </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">ID</p>
            <p className="py-2 border-b mx-8">Product</p>
            <p className="py-2 border-b mx-8">Quantity</p>
          </div>
          <button className="bg-[#3339b4] text-white mx-auto  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2  font-medium rounded-md">
            View more
          </button>
        </div>

        <div className="w-full bg-[#eff6ff] shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img
            className=" mx-auto w-28 mt-[-3rem] bg-white"
            src={Inventory}
            alt="icon"
          />
          <h2 className="text-xl font-bold text-center py-4  "> Inventory </h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-4">ID</p>
            <p className="py-2 border-b mx-8">Product</p>
            <p className="py-2 border-b mx-8">Quantity</p>
          </div>
          <button className="bg-[#3339b4] text-white mx-auto  items-center hover:bg-[#0e188b] w-[200px] px-6 py-1 my-2  font-medium rounded-md">
            View more
          </button>
        </div>
      </div>{" "} */}
    </div>
  );
};

export default Cards;
