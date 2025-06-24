import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    upiId: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter valid 10-digit phone number";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.upiId.trim()) newErrors.upiId = "UPI ID is required";
    else if (!/^[\w.-]+@[\w.-]+$/.test(formData.upiId))
      newErrors.upiId = "Enter valid UPI ID (e.g., user@paytm)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate("/thank-you");
    }, 2000);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  // Calculate totals
  const productPrice = product?.price || 0;
  const shipping = 0; // Free shipping
  const tax = Math.round(productPrice * 0.18); // 18% GST
  const total = productPrice + shipping + tax;

  if (!product) {
    return (
      <div className="payment-container">
        <h2>No Product Selected</h2>
        <p>Please go back and select a product to purchase.</p>
        <button className="btn" onClick={() => navigate("/")}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-header">
        <div className="logo">Ecommerce</div>
        <div className="secure-checkout"> Secure Checkout</div>
      </div>

      <div className="payment-content">
        <div className="payment-form">
          <h2>Payment & Delivery Details</h2>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? "error" : ""}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? "error" : ""}
                placeholder="Enter 10-digit phone number"
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="form-group">
              <label>Delivery Address *</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? "error" : ""}
                placeholder="Enter complete delivery address"
                rows="3"
              />
              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>
          </div>

          <div className="form-section">
            <h3>UPI Payment</h3>
            <div className="upi-info">
              <p>Pay securely using UPI - India's fastest payment method</p>
              <div className="upi-logos">
                <span> PhonePe</span>
                <span> Google Pay</span>
                <span>Paytm</span>
                <span>BHIM</span>
              </div>
            </div>

            <div className="form-group">
              <label>UPI ID *</label>
              <input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleInputChange}
                className={errors.upiId ? "error" : ""}
                placeholder="yourname@paytm or yourname@googlepay"
              />
              {errors.upiId && (
                <span className="error-message">{errors.upiId}</span>
              )}
            </div>
          </div>

          <button
            className={`pay-button ${isProcessing ? "processing" : ""}`}
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing
              ? " Processing Payment..."
              : `Pay ${formatPrice(total)} via UPI`}
          </button>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>

          <div className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-info">
              <h4>{product.title}</h4>
              <p className="brand">Brand: {product.brand}</p>
              <p className="category">Category: {product.category}</p>
              <p className="rating">⭐ {product.rating}</p>
              <p className="price">{formatPrice(product.price)}</p>
            </div>
          </div>

          <div className="price-breakdown">
            <div className="price-row">
              <span>Item Price</span>
              <span>{formatPrice(productPrice)}</span>
            </div>
            <div className="price-row">
              <span>Shipping</span>
              <span className="free">FREE</span>
            </div>
            <div className="price-row">
              <span>Tax (GST 18%)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="price-row total">
              <span>Total Amount</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          <div className="security-info">
            <p> Your payment information is secure</p>
            <p> UPI payments are processed instantly</p>
            <p> Free delivery within 2-3 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
