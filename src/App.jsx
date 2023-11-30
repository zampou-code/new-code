import "./App.css";

import { useEffect, useState } from "react";

import ProductPagination from "./components/ProductPagination";
import ProductSearch from "./components/ProductSearch";
import ProductTable from "./components/ProductTable";

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     category: "Electronics",
//     brand: "Brand A",
//     description: "Description of Product 1",
//     price: 499.99,
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     category: "Clothing",
//     brand: "Brand B",
//     description: "Description of Product 2",
//     price: 39.99,
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     category: "Home Appliances",
//     brand: "Brand C",
//     description: "Description of Product 3",
//     price: 199.99,
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     category: "Beauty",
//     brand: "Brand D",
//     description: "Description of Product 4",
//     price: 29.99,
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     category: "Toys",
//     brand: "Brand E",
//     description: "Description of Product 5",
//     price: 14.99,
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     category: "Sports",
//     brand: "Brand F",
//     description: "Description of Product 6",
//     price: 59.99,
//   },
//   {
//     id: 7,
//     name: "Product 7",
//     category: "Furniture",
//     brand: "Brand G",
//     description: "Description of Product 7",
//     price: 349.99,
//   },
//   {
//     id: 8,
//     name: "Product 8",
//     category: "Books",
//     brand: "Brand H",
//     description: "Description of Product 8",
//     price: 9.99,
//   },
//   {
//     id: 9,
//     name: "Product 9",
//     category: "Food",
//     brand: "Brand I",
//     description: "Description of Product 9",
//     price: 4.99,
//   },
//   {
//     id: 10,
//     name: "Product 10",
//     category: "Garden",
//     brand: "Brand J",
//     description: "Description of Product 10",
//     price: 79.99,
//   },
// ];

function App() {
  const [products, setProduct] = useState([]);

  useEffect(function () {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/product");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  async function crateProduct(product) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      setProduct([...products, data]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
    console.log(product);
  }

  async function updateProduct(productData) {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/product/${productData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productData),
        }
      );
      const updatedProduct = await response.json();

      const updatedProducts = products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );

      setProduct(updatedProducts);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  async function deleteProduct(productId) {
    try {
      await fetch(`http://127.0.0.1:8000/api/product/${productId}`, {
        method: "DELETE",
      });
      const updatedProduct = products.filter(
        (product) => product.id !== productId
      );
      setProduct(updatedProduct);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  function handleSearch(query) {
    if (query === "") {
      fetchProducts();
    }

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
    );

    setProduct(filteredProducts);
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased h-screen">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <ProductSearch crateProduct={crateProduct} onChange={handleSearch} />
          <ProductTable
            products={products}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
          />
          <ProductPagination />
        </div>
      </div>
    </section>
  );
}

export default App;
