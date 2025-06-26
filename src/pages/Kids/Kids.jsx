import React, { useEffect, useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import Cards from "../../components/Cards/Cards";
import "../Kids/Kids.css";
import Title from "../../components/Title/Title";

const Kids = () => {
  const { setCategories } = useContext(ProductsContext);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    setCategories(["tops", "sunglasses"]);
  }, [setCategories]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/28")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.images[0]);
      });
  }, []);

  return (
    <>
      <div className="kids-hero">
        <div className="hero-text">
          <h1>Trendy Picks for Kids</h1>
          <p>
            Shop adorable and stylish products perfect for your little ones!
          </p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="hero-img">
          {imageUrl && (
            <img src={imageUrl} alt="Kids Product" className="hero-image" />
          )}
        </div>
      </div>

      <Title
        title="Featured Kids Products"
        subtitle="Discover our exclusive range of products"
      />
      <Cards />
    </>
  );
};

export default Kids;
