import React, { useContext } from "react";
import { Mycontext } from "./contexts/cartContext";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const { cartitems, quantity, removeFromCart, handlequantitychange } =
    useContext(Mycontext);

  const navigate = useNavigate();

  const subtotal = cartitems.reduce((acc, item) => {
    const itemQty = quantity[item.id] || 1;
    return acc + item.price * itemQty;
  }, 0);

  return (
    <div className="cart-container">
      {cartitems.length > 0 ? (
        <div className="cart-page">
          {/* HEADER */}
          <div className="cart-header">
            <button className="cart-back-btn" onClick={() => navigate(-1)}>
              ←
            </button>

            <h1>Your Cart</h1>
          </div>

          {/* CART COUNT */}
          <div className="cart-count">
            <span>🛍</span>
            <p>
              You have <strong>{cartitems.length}</strong>{" "}
              {cartitems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>

          {/* ITEMS */}
          <div className="cart-items-list">
            {cartitems.map((item) => {
              const itemQty = quantity[item.id] || 1;

              const itemTotal = item.price * itemQty;

              return (
                <div className="cart-item-card" key={item.id}>
                  {/* IMAGE */}
                  <img
                    src={item.img || item.image}
                    alt={item.name}
                    loading="lazy"
                  />

                  {/* DETAILS */}
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p className="cart-item-description">{item.description}</p>

                    {/* QUANTITY */}
                    <div className="cart-qty-controls">
                      <button
                        type="button"
                        onClick={() => handlequantitychange?.(item.id, -1)}
                      >
                        −
                      </button>

                      <span>{itemQty}</span>

                      <button
                        type="button"
                        onClick={() => handlequantitychange?.(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="cart-item-right">
                    <span className="cart-item-price">
                      GH₵{itemTotal.toFixed(2)}
                    </span>

                    <button
                      className="item-delete-btn"
                      type="button"
                      onClick={() => removeFromCart?.(item.id)}
                    >
                      🗑
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ORDER SUMMARY */}
          <div className="order-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>GH₵{subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>GH₵0.00</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>GH₵{subtotal.toFixed(2)}</strong>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="cart-actions">
            <button className="continue-shopping" onClick={() => navigate(-1)}>
              ← &nbsp; Continue Shopping
            </button>

            <button
              className="proceed-order"
              onClick={() => navigate("/order")}
            >
              Proceed to Order
              <span>→</span>
            </button>
          </div>

          {/* SECURE CHECKOUT */}
          <div className="secure-checkout">🔒 &nbsp; Secure checkout</div>
        </div>
      ) : (
        /* EMPTY CART */

        <div className="empty-cart-card">
          <div className="empty-cart-icon">🛒</div>

          <h2>Your Cart is Empty</h2>

          <p>Looks like you haven't added anything yet.</p>

          <button className="back-btn" onClick={() => navigate("/")}>
            Explore Menu
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
