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
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;