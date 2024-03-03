import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

function ProductManufacturing() {
  const [products, setProducts] = useState([]);

  // Fetch products from the server on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    // Make GET request using Axios
    axios
      .get("http://127.0.0.1:8000/manufacture/")
      .then((response) => {
        // Handle success
        setProducts(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  };

  const addProduct = (newProduct) => {
    // Add new product to the state
    setProducts([...products, newProduct]);
  };

  const handleStatusChange = (productId, newStatus) => {
    // Update the status of the product with productId
    const updatedProducts = {
      ...products,
      [productId]: {
        ...products[productId],
        status: newStatus,
      },
    };
    setProducts(updatedProducts);
  };

  return (
    <div>
      <ProductForm onAddProduct={addProduct} />
      <ProductTable products={products} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default ProductManufacturing;
