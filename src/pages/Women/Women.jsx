import React, { useEffect, useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Cards from "../../components/Cards/Cards";
import "../Women/Women.css"; // Create this CSS file for styling

const Women = () => {
  const { setCategories } = useContext(ProductsContext);

  useEffect(() => {
    setCategories([
      "womens-dresses",
      "womens-shoes",
      "womens-watches",
      "womens-bags",
      "womens-jewellery",
    ]);
  }, [setCategories]);

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/177")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.images[0]);
      });
  }, []);

  return (
    <>
      <div className="women-hero">
        <div className="hero-text">
          <h1>Exclusive Women's Collection</h1>
          <p>
            Discover elegance, style, and comfort in our specially curated
            selection for women.
          </p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-img">
          {imageUrl && (
            <img src={imageUrl} alt="Product" className="hero-image" />
          )}
        </div>
      </div>

      <div className="section-title">
        <h2>Women's Products</h2>
      </div>
      <Cards />
    </>
  );
};

export default Women;
