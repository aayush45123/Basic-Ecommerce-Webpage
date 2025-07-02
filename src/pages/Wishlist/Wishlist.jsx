import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CardContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaTrash, FaStar } from "react-icons/fa";
import { MdRemoveShoppingCart } from "react-icons/md";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist, moveToCart } =
    useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleMoveToCart = (productId) => {
    moveToCart(productId, addToCart);
  };

  const handleBuyNow = (item) => {
    navigate("/payment", { state: { product: item } });
  };

  const handleShopMore = () => {
    navigate("/");
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2 className="wishlist-heading">
          <FaHeart className="heart-icon" />
          My Wishlist ({wishlist.length})
        </h2>
        {wishlist.length > 0 && (
          <button
            className="clear-wishlist-btn"
            onClick={clearWishlist}
            title="Clear all items from wishlist"
          >
            <FaTrash /> Clear All
          </button>
        )}
      </div>

      {wishlist.length === 0 ? (
        <div className="wishlist-empty-container">
          <div className="empty-wishlist-icon">
            <FaHeart />
          </div>
          <h3 className="wishlist-empty-title">Your wishlist is empty</h3>
          <p className="wishlist-empty-text">
            Save your favorite items here so you don't lose sight of them.
          </p>
          <button className="wishlist-btn primary" onClick={handleShopMore}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="wishlist-content">
          <div className="wishlist-stats">
            <p className="wishlist-info">
              You have {wishlist.length} item{wishlist.length > 1 ? "s" : ""} in
              your wishlist
            </p>
          </div>

          <div className="wishlist-grid">
            {wishlist.map((item) => (
              <div className="wishlist-card" key={item.id}>
                <div className="wishlist-card-header">
                  <button
                    className="remove-wishlist-btn"
                    onClick={() => removeFromWishlist(item.id)}
                    title="Remove from wishlist"
                  >
                    <FaTrash />
                  </button>
                  {item.addedAt && (
                    <span className="added-date">
                      Added {formatDate(item.addedAt)}
                    </span>
                  )}
                </div>

                <div className="wishlist-card-image">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="wishlist-img"
                    onClick={() => navigate(`/product/${item.id}`)}
                  />
                  {item.discountPercentage && (
                    <span className="discount-badge">
                      -{Math.round(item.discountPercentage)}% OFF
                    </span>
                  )}
                </div>

                <div className="wishlist-card-content">
                  <h3 className="wishlist-title">{item.title}</h3>

                  <div className="wishlist-meta">
                    {item.brand && (
                      <p className="wishlist-brand">Brand: {item.brand}</p>
                    )}
                    <p className="wishlist-category">
                      Category: {item.category}
                    </p>
                    {item.rating && (
                      <div className="wishlist-rating">
                        <FaStar className="star-icon" />
                        <span>{item.rating}</span>
                      </div>
                    )}
                  </div>

                  <div className="wishlist-price">
                    <span className="current-price">
                      {formatPrice(item.price)}
                    </span>
                    {item.discountPercentage && (
                      <span className="original-price">
                        {formatPrice(
                          item.price / (1 - item.discountPercentage / 100)
                        )}
                      </span>
                    )}
                  </div>

                  <div className="wishlist-actions">
                    <button
                      className="wishlist-btn primary"
                      onClick={() => handleMoveToCart(item.id)}
                      title="Move to cart"
                    >
                      <FaShoppingCart /> Move to Cart
                    </button>
                    <button
                      className="wishlist-btn secondary"
                      onClick={() => handleAddToCart(item)}
                      title="Add to cart (keep in wishlist)"
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                    <button
                      className="wishlist-btn accent"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="wishlist-footer">
            <button
              className="wishlist-btn secondary large"
              onClick={handleShopMore}
            >
              Continue Shopping
            </button>
            <button
              className="wishlist-btn primary large"
              onClick={() => {
                wishlist.forEach((item) => addToCart(item));
                navigate("/cart");
              }}
            >
              Add All to Cart ({wishlist.length})
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
