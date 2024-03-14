import React from "react";
import CustomerCard from "../CustomerCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the form data to your backend API
    axios
      .post("http://127.0.0.1:8000/add_customers/", formData)
      .then((response) => {
        console.log("Customer added successfully:", response.data);
        // Optionally, you can reset the form fields after successful submission
        setFormData({
          name: "",
          address: "",
          contact: "",
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error adding customer:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/list_customers/"
        );
        setCustomers(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=" overflow-hidden ">
      <h1 className="font-bold text-[#3339b4] font-serif ml-5 md:text-3xl sm:text-2xl text-lg sm:py-3 ">
        Customers
      </h1>

      {/* <div className="justify-center bg-white rounded-md sm:ml-20 sm:mr-20 lg:ml-52 lg:mr-52 p-5 flex"> */}
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <div className="flex w-full">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="rounded-md ml-2 my-4 bg-transparent lg:w-48 text-sm shadow-inner shadow-slate-400 bg-opacity-25 flex w-[40vws] p-2"
          />
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Address"
            className="rounded-md ml-2 my-4 lg:w-48 bg-transparent font-medium text-sm shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2"
          />
        </div>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          placeholder="Phone"
          className="rounded-md ml-2 my-4 lg:w-96 bg-transparent font-medium text-sm shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2"
        />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="rounded-md ml-2 my-4 lg:w-96 bg-transparent font-medium text-sm shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2"
        />

        <button
          className="bg-[#3339b4] ml-2 text-white mx-auto w-auto justify-center hover:bg-[#0e188b] px-6 py-1 my-2 font-medium rounded-md"
          type="submit"
        >
          Add Customer
        </button>
      </form>

      {/* </div> */}

      <div className="max-w-[1240px] h-[65vh] mx-auto mt-12 overflow-y-scroll">
        <table className="min-w-full bg-white divide-y divide-gray-200 shadow overflow-hidden sm:rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Object.entries(customers).map(([number, details]) => (
              <tr key={number} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">{details.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {details.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {details.contact}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{details.email}</td>
              </tr>
              // <CustomerCard name={details.name} address={details.address} />
            ))}
            {/* {Object.entries(products).map(([product, details]) => (
              <tr key={product} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {details.thickness}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {details.length}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {details.raw_material}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{details.price}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
