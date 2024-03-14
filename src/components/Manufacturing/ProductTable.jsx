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
    <div className="px-5">
      <h2 className="sm:text-xl grid grid-col-2 text-[#3339b4] font-semibold font-serif py-2 md:text-2xl text-lg">
        Product List
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-200 shadow overflow-hidden sm:rounded-lg">
          <thead>
            <tr>
              <th className="border border-gray-200 px-4 py-2">Product Name</th>
              <th className="border border-gray-200 px-4 py-2">Quantity</th>
              <th className="border border-gray-200 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {Object.keys(products).map((productId) => {
              const product = products[productId];
              let dropdownOptions = [];
              if (product.status === "Pending") {
                dropdownOptions = ["Pending", "In Process"];
              } else if (product.status === "In Process") {
                dropdownOptions = ["In Process", "Manufactured"];
              }
              return (
                <tr key={productId} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {dropdownOptions.length > 0 ? (
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 hover:border-gray-300 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
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
    </div>
  );
}

export default ProductTable;
