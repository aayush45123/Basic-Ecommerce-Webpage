import { useNavigate } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };

  return (
    <div className="thankyou-page">
      <div className="thankyou-container">
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="checkmark"></div>
          </div>
        </div>

        <div className="content">
          <h1 className="title">Thank You So Much!</h1>
          <p className="subtitle">Your order has been placed successfully</p>

          <div className="celebration">
            <span className="emoji">🎉</span>
            <span className="emoji">✨</span>
            <span className="emoji">🛍️</span>
          </div>

          <div className="order-info">
            <div className="info-card">
              <h3>What's Next?</h3>
              <ul>
                <li>📧 You'll receive an order confirmation email shortly</li>
                <li>📦 Your order will be processed within 24 hours</li>
                <li>🚚 Expected delivery: 2-3 business days</li>
                <li>📱 Track your order in your account</li>
              </ul>
            </div>
          </div>

          <div className="action-buttons">
            <button className="btn primary" onClick={handleContinueShopping}>
              Continue Shopping
            </button>
            <button
              className="btn secondary"
              onClick={() => navigate("/orders")}
            >
              View Orders
            </button>
          </div>
        </div>

        <div className="floating-elements">
          <div className="float-1">💝</div>
          <div className="float-2">🎊</div>
          <div className="float-3">⭐</div>
          <div className="float-4">🎁</div>
          <div className="float-5">🌟</div>
          <div className="float-6">💫</div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
