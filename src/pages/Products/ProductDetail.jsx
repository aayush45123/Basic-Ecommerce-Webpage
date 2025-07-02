import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CardContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setMainImage(data.thumbnail);
      });
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    const productWithQuantity = {
      ...product,
      quantity: quantity,
    };
    addToCart(productWithQuantity);
    navigate("/cart");
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  if (!product) return <p>Loading...</p>;

  const handleBuyNow = () => {
    navigate("/payment", { state: { product, quantity } });
  };

  return (
    <div className="product-detail">
      <div className="product-left">
        <img src={mainImage} alt={product.title} className="main-image" />
        <div className="gallery">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${product.title}-${i}`}
              className={mainImage === img ? "active" : ""}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="product-right">
        <h1>{product.title}</h1>
        <div className="category">🧺 {product.category}</div>
        <div className="price">₹{product.price}</div>
        <div className="rating">
          ⭐ {product.rating} <span className="reviews">(120 reviews)</span>
        </div>
        <p className="description">{product.description}</p>

        <div className="quantity-control">
          <span>Quantity:</span>
          <div className="qty-btns">
            <button onClick={decreaseQuantity} disabled={quantity <= 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>

        <div className="buttons">
          <button className="btn" onClick={handleAddToCart}>
            🛒 Add to Cart
          </button>
          <button className="btn outline" onClick={handleAddToWishlist}>
            🤍 Add to Wishlist
          </button>
          <button className="btn buy-now" onClick={handleBuyNow}>
            ⚡ Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
