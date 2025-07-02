import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedProducts = [];

        if (categories.length === 0) {
          const res = await fetch("https://dummyjson.com/products?limit=20");
          const data = await res.json();
          fetchedProducts = data.products || [];
        } else {
          const allResults = await Promise.all(
            categories.map(async (category) => {
              const res = await fetch(
                `https://dummyjson.com/products/category/${category}`
              );
              const data = await res.json();
              return data.products || [];
            })
          );
          fetchedProducts = allResults.flat();
        }

        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [categories]);

  // 🔍 Global search listener
  useEffect(() => {
    const handleSearch = (e) => {
      const term = e.detail.toLowerCase();
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    };

    window.addEventListener("search", handleSearch);
    return () => window.removeEventListener("search", handleSearch);
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        setFilteredProducts,
        setCategories,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
