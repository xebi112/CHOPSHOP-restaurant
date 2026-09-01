import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "./contexts/cartContext";
import "./cartmodal.css";
function Cartmodal() {
  const {
    cartitems,
    cartOpen,
    closemodal,
    quantity,
    handlequantitychange,
    handlefloatingcart,
  } = useContext(Mycontext);
  const navigate = useNavigate();
  if (!cartOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="close-btn">
          <button onClick={closemodal} className="close">
            x
          </button>
        </div>
        <div className="success-icon">✓</div>
        <p className="success-mesg">Added to Cart</p>
        <p className="sub-mesg">Item has been added to your cart.</p>
        {cartitems.map((item) => (
          <div className="item-list" key={item.id}>
            <img src={item.img} loading="lazy" />
            <div className="item-list-card">
              <p>{item.name}</p>
              <p className="qty">Qty: {quantity[item.id] || 1}x</p>
            </div>
            <span className="price">GH₵ {item.price}</span>
          </div>
        ))}
        <div className="modal-btn">
          <button className="shopping-btn" onClick={handlefloatingcart}>
            Continue Shopping
          </button>
          <button className="view-cart-btn" onClick={() => navigate("/cart")}>
            <FontAwesomeIcon icon={faCartShopping} />
            <span>View Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cartmodal;
