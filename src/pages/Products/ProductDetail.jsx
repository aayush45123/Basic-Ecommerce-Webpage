import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CardContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleBuyNow = () => {
    navigate("/payment", { state: { product } });
  };

  return (
    <div className="product-detail">
      <div className="product-left">
        <img src={product.thumbnail} alt={product.title} />
        <div className="gallery">
          {product.images.map((img, i) => (
            <img key={i} src={img} alt={`${product.title}-${i}`} />
          ))}
        </div>
      </div>

      <div className="product-right">
        <h1>{product.title}</h1>
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ₹{product.price}</p>
        <p><strong>Rating:</strong> ⭐ {product.rating}</p>

        <div className="buttons">
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="btn buy" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
