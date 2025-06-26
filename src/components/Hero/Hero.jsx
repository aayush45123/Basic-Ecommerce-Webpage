import React, { useEffect, useState } from "react";
import "./Hero.css";
import Cards from "../Cards/Cards";
import Title from "../Title/Title";

const Hero = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    fetch("https://dummyjson.com/products/2")
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.images[0]);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="promo-banner">
        <div className="promo-text">
          🔥 FLASH SALE: Extra 15% OFF on orders above $99!
          <span className="promo-timer">
            {String(timeLeft.hours).padStart(2, "0")}:
            {String(timeLeft.minutes).padStart(2, "0")}:
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
        </div>
      </div>

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

        <div className="bottom-promo">
          <div className="promo-features">
            <div className="promo-feature">
              <div className="promo-feature-icon">🚚</div>
              <div className="promo-feature-text">Free Delivery on $50+</div>
            </div>
            <div className="promo-feature">
              <div className="promo-feature-icon">↩️</div>
              <div className="promo-feature-text">30-Day Returns</div>
            </div>
            <div className="promo-feature">
              <div className="promo-feature-icon">🔒</div>
              <div className="promo-feature-text">Secure Payment</div>
            </div>
            <div className="promo-feature">
              <div className="promo-feature-icon">⭐</div>
              <div className="promo-feature-text">5-Star Reviews</div>
            </div>
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
