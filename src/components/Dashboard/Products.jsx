import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/store/");
        setproducts(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-[#3339b4] font-serif p-2 text-center md:text-3xl sm:text-2xl text-lg md:py-6 sm:py-3">
        Products
      </h1>
      <div className="max-w-[1240px] mx-auto mt-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thickness
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Length
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Raw Material
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(products).map(([product, details]) => (
              <tr key={product}>
                <td className="border border-gray-800 p-2">{product}</td>
                <td className="border border-gray-800 p-2">
                  {details.thickness}
                </td>
                <td className="border border-gray-800 p-2">
                  {details.raw_material}
                </td>
                <td className="border border-gray-800 p-2">{details.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
