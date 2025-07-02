import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./Cart.css";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    navigate("/payment", { state: { product: item } });
  };

  const handleShopMore = () => {
    navigate("/");
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.qty || 1),
      0
    );
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <div className="cart-empty-container">
          <p className="cart-empty">Your cart is empty.</p>
          <button className="cart-btn primary" onClick={handleShopMore}>
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-left">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="cart-img"
                  />
                </div>

                <div className="cart-item-right">
                  <h3 className="cart-title">{item.title}</h3>
                  <p className="cart-meta">
                    Category: <span>{item.category}</span>
                  </p>
                  <p className="cart-meta">
                    Color: <span>Red</span>
                  </p>
                  <p className="cart-price">
                    ₹ {item.price} × {item.qty || 1} = ₹{" "}
                    {item.price * (item.qty || 1)}
                  </p>

                  <div className="cart-controls">
                    <div className="qty-controls">
                      <button
                        className="qty-btn"
                        onClick={() => decreaseQty(item.id)}
                      >
                        −
                      </button>
                      <span className="qty-value">{item.qty || 1}</span>
                      <button
                        className="qty-btn"
                        onClick={() => increaseQty(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>

                  <div className="item-actions">
                    <button
                      className="cart-btn primary"
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                    <button
                      className="cart-btn secondary"
                      onClick={handleShopMore}
                    >
                      Shop More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <h3>Total: ₹ {getTotalPrice()}</h3>
            </div>
            <div className="cart-footer">
              <button
                className="cart-btn primary large"
                onClick={() => {
                  navigate("/payment", { state: { products: cart } });
                }}
              >
                Checkout All Items
              </button>
              <button className="cart-btn secondary" onClick={handleShopMore}>
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
