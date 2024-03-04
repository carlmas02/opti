import React from "react";
import axios from "axios";

function ProductTable({ products, onStatusChange }) {
  const updateManufacture = (data) => {
    axios
      .post("http://127.0.0.1:8000/update_manufacture/", data)
      .then((response) => {
        if (response.status === 200) {
          alert("Successfully updated");
        }
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  const handleChange = (event, productId) => {
    const newStatus = event.target.value;
    console.log(newStatus);
    const postData = {
      id: productId.toString(),
      status: newStatus,
    };
    updateManufacture(postData);
    onStatusChange(productId, newStatus);
  };
  return (
    <div>
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(products).map((productId) => {
            const product = products[productId];
            let dropdownOptions = [];
            if (product.status === "Pending") {
              dropdownOptions = ["Pending", "In Process"];
            } else if (product.status === "In Process") {
              dropdownOptions = ["In Process", "Manufactured"];
            }
            return (
              <tr key={productId}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>
                  {dropdownOptions.length > 0 ? (
                    <select
                      value={product.status}
                      onChange={(e) => handleChange(e, productId)}
                    >
                      {dropdownOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <option value="Manufactured">Manufactured</option>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
