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
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product:
          <select
            value={productName}
            onChange={handleProductNameChange}
            required
          >
            <option value="">Select Product</option>
            <option value="IC Lock Cover">IC Lock Cover</option>
            <option value="Security Metre Wire">Security Metre Wire</option>
            <option value="Compression Spring">Compression Spring</option>
            <option value="Torsion Spring">Torsion Spring</option>
            <option value="Caplock">Caplock</option>
            <option value="Debring">Debring</option>
          </select>
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
