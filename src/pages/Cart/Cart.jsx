import { useContext } from "react";
import { CartContext } from "../../context/CardContext";
import "../Cart/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    navigate("/payment");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
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
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">
                  ₹{item.price} × {item.qty} = ₹{item.price * item.qty}
                </p>
                <div className="cart-item-buttons">
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="buy-btn"
                    onClick={() => handleBuyNow(item)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
