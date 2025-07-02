import React, { useEffect } from "react";
import Hero from "../components/Hero/Hero";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

const Home = () => {
  const { products, setFilteredProducts } = useContext(ProductsContext);

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
    <>
      <Hero />
    </>
  );
};

export default Home;
