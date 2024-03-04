import React, { useState, useEffect } from "react";
import axios from "axios";

const RawMaterialsPurchase = () => {
  const [rawMaterials, setRawMaterials] = useState();

  const data = {
    supplier: "Mahima Steels",
    product: "spring_rod_5x",
    quantity: 400,
    ordered_date: "2023-01-01",
    received_date: "2023-01-02",
    amount: 8000,
    purchase_status: "Acquired",
  };

  const fetchRawMaterials = () => {
    // Make GET request using Axios
    axios
      .get("http://127.0.0.1:8000/list_purchase/")
      .then((response) => {
        // Handle success
        console.log(response.data);
        setRawMaterials(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchRawMaterials();
  }, []);

  return (
    <div>
      <thead className="">
        <tr>
          <th className="px-14 py-2">Supplier</th>
          <th className="pl-48 py-2">Product</th>
          <th className="pl-28 py-2">Quantity</th>
          <th className="px-14 py-2">Ordered Date</th>
          <th className="px-2 py-2">Received Date</th>
          <th className="pl-20 py-2">Amount</th>
          <th className="px-8 py-2">Purchase Status</th>
        </tr>
      </thead>
      <div className="container mx-auto p-4 h-[90vh] overflow-y-scroll">
        <Table data={rawMaterials} />
      </div>
    </div>
  );
};

export default RawMaterialsPurchase;

const TableRow = ({ data }) => {
  // console.log(data);
  return (
    <tr className="table-auto w-full">
      <td className="border px-4 py-2">{data.supplier}</td>
      <td className="border px-4 py-2">{data.product}</td>
      <td className="border px-4 py-2">{data.quantity}</td>
      <td className="border px-4 py-2">{data.ordered_date}</td>
      <td className="border px-4 py-2">{data.received_date}</td>
      <td className="border px-4 py-2">{data.amount}</td>
      <td className="border px-4 py-2">{data.purchase_status}</td>
    </tr>
  );
};

const Table = ({ data }) => {
  return (
    <table className="table-auto w-full ">
      <tbody>
        {data &&
          Object.keys(data).map((key) => (
            <TableRow key={key} data={data[key]} />
          ))}
      </tbody>
    </table>
  );
};
