import React, { useEffect, useState } from "react";
import "./Hero.css";
import Cards from "../Cards/Cards";
import Title from "../Title/Title";

const Hero = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products/2")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.images[0]);
      });
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <h1>Big Sale!</h1>
            <p>
              Sales up to <strong>10% OFF</strong> on all{" "}
              <strong>Beauty Products</strong>
            </p>
            <button className="hero-btn">Shop Now</button>
          </div>
          <div className="hero-right">
            {imageUrl && (
              <img src={imageUrl} alt="Product" className="hero-image" />
            )}
          </div>
        </div>
      </div>
      <Title
        title="Featured Products"
        subtitle="Discover our exclusive range of products"
      />
      <Cards />
    </>
  );
};

export default Hero;
