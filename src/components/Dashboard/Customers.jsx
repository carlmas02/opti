import React from "react";
import CustomerCard from "../CustomerCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/list_customers/"
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" ">
      <h1 className="font-bold text-[#3339b4] font-serif text-center md:text-3xl sm:text-2xl text-lg sm:py-3 ">
        Customers
      </h1>

      <div className="w-[1240px] mx-auto grid grid-cols-4 gap-4 overflow-x-hidden  overflow-y-scroll">
        {Object.entries(customers).map(([number, details]) => (
          <CustomerCard name={details.name} address={details.address} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
