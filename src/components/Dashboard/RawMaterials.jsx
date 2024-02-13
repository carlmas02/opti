import React, { useState, useEffect } from "react";
import axios from "axios";

const RawMaterials = () => {
  const [rawMaterials, setRawMaterials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/store/");
        setRawMaterials(response.data["raw_materials"]);
        console.log(response.data["raw_materials"]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-[#3339b4] font-serif p-2 text-center md:text-3xl sm:text-2xl text-lg md:py-6 sm:py-3">
        Raw Materials
      </h1>
      <div className="max-w-[1240px] mx-auto mt-12">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Material
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Thickness
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Length
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Supplier
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* {rawMaterials.map((material, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{material.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {material.thickness}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {material.length}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {material.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {material.supplier}
                </td>
              </tr>
            ))} */}
            {Object.entries(rawMaterials).map(([material, details]) => (
              <tr key={material}>
                <td className="border border-gray-800 p-2">{material}</td>
                <td className="border border-gray-800 p-2">
                  {details.thickness}
                </td>
                <td className="border border-gray-800 p-2">{details.length}</td>
                <td className="border border-gray-800 p-2">{details.price}</td>
                <td className="border border-gray-800 p-2">
                  {details.supplier}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RawMaterials;
