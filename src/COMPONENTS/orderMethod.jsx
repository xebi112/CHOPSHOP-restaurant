import React, { useState } from "react";
import "./ordermethod.css";
import { useNavigate } from "react-router-dom";

function OrderMethod() {
  const [orderType, setOrderType] = useState("delivery"); // Default selection
  const [paymentMethod, setPaymentMethod] = useState("cash");

  // Form input state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    instructions: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      orderType,
      paymentMethod,
      ...formData,
    };
    console.log("Submitting Order Payload:", payload);
    alert(`Order Confirmed via ${orderType.toUpperCase()}!`);
  };
  const navigate = useNavigate();
  return (
    <div className="order-container">
      <button className="cart-back-btn" onClick={() => navigate(-1)}>
        ←
      </button>
      <div className="order-header-section">
        <h1>CHOP SHOP</h1>
        <h6>We've got you covered</h6>
        <p className="subtitle">How would you like to receive your order?</p>
        <p className="sub-caption">
          Select the most convenient option for you.
        </p>
      </div>

      {/* Order Type Toggle Buttons */}
      <div className="order-btns">
        <button
          type="button"
          className={`method-btn delivery-btn ${
            orderType === "delivery" ? "active" : ""
          }`}
          onClick={() => setOrderType("delivery")}
        >
          <div className="method-container">
            <img src="rider.jpeg" alt="Delivery Rider" className="order-img" />
            <span className="method-title">Delivery</span>
          </div>
        </button>

        <button
          type="button"
          className={`method-btn pickup-btn ${
            orderType === "pickup" ? "active" : ""
          }`}
          onClick={() => setOrderType("pickup")}
        >
          <div className="method-container">
            <img src="bag.jpeg" alt="Takeout Bag" className="order-img" />
            <span className="method-title">Pick Up</span>
          </div>
        </button>
      </div>

      {/* DELIVERY FORM */}
      {orderType === "delivery" && (
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-card">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="e.g., 0244000000"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                placeholder="e.g., East Legon, near American House, House No. 12"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="instructions">
                Special Instructions (Optional)
              </label>
              <textarea
                id="instructions"
                name="instructions"
                rows="3"
                placeholder="e.g., Leave at the front gate, extra spicy..."
                value={formData.instructions}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Payment Section */}
            <h4 className="payment-head">Choose a Payment Method</h4>
            <div className="payment-methods">
              <button
                type="button"
                className={`payment-btn ${
                  paymentMethod === "cash" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("cash")}
              >
                <span>Cash on Delivery</span>
                <span className="icon">💵</span>
              </button>

              <button
                type="button"
                className={`payment-btn ${
                  paymentMethod === "momo" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("momo")}
              >
                <span>Mobile Money</span>
                <span className="icon">📱</span>
              </button>

              <button
                type="button"
                className={`payment-btn ${
                  paymentMethod === "card" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <span>Card Payment</span>
                <span className="icon">💳</span>
              </button>
            </div>

            <button type="submit" className="confirm-order-btn">
              Confirm Delivery Order
            </button>
          </div>
        </form>
      )}

      {/* PICK-UP FORM */}
      {orderType === "pickup" && (
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-card">
            <div className="pickup-notice">
              <p>
                📍 <strong>Pickup Station:</strong> 27 Kanfla Close, Asylum-Down
              </p>
              <p>
                ⏱ <strong>Estimated Preparation Time:</strong> 20–30 mins
              </p>
            </div>

            <div className="form-group">
              <label htmlFor="pickupFullName">Full Name</label>
              <input
                id="pickupFullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pickupPhone">Phone Number</label>
              <input
                id="pickupPhone"
                name="phone"
                type="tel"
                placeholder="e.g., 0244000000"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pickupInstructions">
                Special Instructions (Optional)
              </label>
              <textarea
                id="pickupInstructions"
                name="instructions"
                rows="3"
                placeholder="e.g., Extra packaging, double sauce..."
                value={formData.instructions}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Payment Section */}
            <h4 className="payment-head">Choose a Payment Method</h4>
            <div className="payment-methods">
              <button
                type="button"
                className={`payment-btn ${
                  paymentMethod === "cash" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("cash")}
              >
                <span>Pay at Counter</span>
                <span className="icon">💵</span>
              </button>

              <button
                type="button"
                className={`payment-btn ${
                  paymentMethod === "momo" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("momo")}
              >
                <span>Mobile Money</span>
                <span className="icon">📱</span>
              </button>

              <button
                type="button"
                className={`payment-btn ${
                  paymentMethod === "card" ? "active" : ""
                }`}
                onClick={() => setPaymentMethod("card")}
              >
                <span>Card Payment</span>
                <span className="icon">💳</span>
              </button>
            </div>

            <button type="submit" className="confirm-order-btn">
              Confirm Pick-Up Order
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default OrderMethod;
