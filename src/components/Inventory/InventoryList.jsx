import React from 'react';

const InventoryList = ({ data }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Inventory</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(data.inventory).map((product, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold">{product}</h3>
            <p>Quantity: {data.inventory[product]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryList;
