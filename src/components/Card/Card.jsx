import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ product }) => {
  const discount = Math.round(product.discountPercentage);

  return (
    <div className="card-wrapper">
      <Link to={`/product/${product.id}`} className="card">
        <div className="card-img">
          <img src={product.thumbnail} alt={product.title} className="img" />
        </div>
        <div className="card-title">{product.title}</div>
        <div className="card-subtitle">
          {product.description.length > 50
            ? product.description.slice(0, 50) + "..."
            : product.description}
        </div>
        <hr className="card-divider" />
        <div className="card-footer">
          <div className="card-price">
            <span>$</span> {product.price}
          </div>
          <button className="card-btn" title={`Min. ${discount}% Off`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
              <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
              <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
              <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
            </svg>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
