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

      <div>
        <h2>Add Customer</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <button type="submit">Add Customer</button>
        </form>
      </div>

      <div className=" h-[50vh] mx-auto grid grid-cols-4 gap-4 overflow-y-scroll">
        {Object.entries(customers).map(([number, details]) => (
          <CustomerCard name={details.name} address={details.address} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
