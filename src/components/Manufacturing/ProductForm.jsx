// ProductForm.js
import React, { useState } from "react";
import axios from "axios";

function ProductForm({ onAddProduct }) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create data object
    const data = {
      name: productName,
      quantity: quantity,
    };

    console.log(data);
    // onAddProduct(data); // Notify parent component

    // Make POST request using Axios
    axios
      .post("http://127.0.0.1:8000/add_manufacture/", data)
      .then((response) => {
        // Handle success
        onAddProduct(data); // Notify parent component
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  return (
    <div className=" px-5">
      <h2 className="sm:text-xl   grid grid-col-2 text-[#3339b4] font-bold font-serif py-2 md:text-2xl text-lg">
        Add Product
      </h2>
      <form onSubmit={handleSubmit}>
        <select
          value={productName}
          onChange={handleProductNameChange}
          required
          className="rounded-md mt-2 bg-transparent font-medium  text-sm  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2"
        >
          <option value="">Select Product</option>
          <option value="IC Lock Cover">IC Lock Cover</option>
          <option value="Security Metre Wire">Security Metre Wire</option>
          <option value="Compression Spring">Compression Spring</option>
          <option value="Torsion Spring">Torsion Spring</option>
          <option value="Caplock">Caplock</option>
          <option value="Debring">Debring</option>
        </select>
        <br />

        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          required
          placeholder="Quantity"
          className="rounded-md bg-transparent  shadow-inner shadow-slate-400 bg-opacity-25 flex w-full p-2 "
        />
        <br />
        <button
          className="bg-[#3339b4] text-white mx-auto  items-center hover:bg-[#0e188b] w-[150px] px-6 py-1 my-2  font-medium rounded-md"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
