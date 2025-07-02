import React, { useEffect, useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Cards from "../../components/Cards/Cards";
import "../Men/Men.css";
import Title from "../../components/Title/Title";

const Men = () => {
  const { products, filteredProducts, setFilteredProducts, setCategories } =
    useContext(ProductsContext);

  const [imageUrl, setImageUrl] = useState("");

  // Set Men categories when component mounts
  useEffect(() => {
    setCategories(["mens-shirts", "mens-shoes", "mens-watches"]);
  }, [setCategories]);

  // Search event listener
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

  // Load a hero image dynamically
  useEffect(() => {
    fetch("https://dummyjson.com/products/83")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.images[0]);
      });
  }, []);

  return (
    <div className="men-page">
      <section className="men-hero">
        <div className="men-hero-content">
          <h1>Explore Men's Collection</h1>
          <p>Trendy Shirts, Stylish Watches & Comfortable Shoes</p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="men-hero-image">
          {imageUrl && (
            <img src={imageUrl} alt="Product" className="hero-image" />
          )}
        </div>
      </section>

      <section className="men-products">
        <Title
          title="Featured Men Products"
          subtitle="Discover our exclusive range of products"
        />
        <Cards products={filteredProducts} />
      </section>
    </div>
  );
};

export default Men;
