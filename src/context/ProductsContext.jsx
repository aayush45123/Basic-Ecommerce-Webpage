import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (categories.length === 0) {
        const res = await fetch("https://dummyjson.com/products?limit=9");
        const data = await res.json();
        setProducts(data.products || []);
        return;
      }

      const allResults = await Promise.all(
        categories.map(async (category) => {
          const res = await fetch(
            `https://dummyjson.com/products/category/${category}`
          );
          const data = await res.json();
          return data.products || [];
        })
      );

      setProducts(allResults.flat());
    };

    fetchData();
  }, [categories]);

  return (
    <ProductsContext.Provider value={{ products, setCategories }}>
      {children}
    </ProductsContext.Provider>
  );
};
