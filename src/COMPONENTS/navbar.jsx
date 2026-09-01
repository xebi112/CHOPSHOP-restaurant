import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { Mycontext } from "./contexts/cartContext";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const { cartitems, quantity } = useContext(Mycontext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger background change after scrolling down 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Total number of dishes/units in cart
  const totalItems = cartitems.reduce((total, item) => {
    return total + (quantity[item.id] || 1);
  }, 0);
  const navigate = useNavigate();
  return (
    <div>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Left: Logo */}
        <div className="logo">
          CHOP <span> SHOP</span>
        </div>

        {/* Center: Nav Links */}
        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#menu" onClick={() => setMobileMenuOpen(false)}>
            Menu
          </a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </a>

          {/* Mobile-only CTA */}
          <button
            className="order-btn-mobile"
            onClick={() => handleWhatsAppOrder()}
          >
            Order / Reserve
          </button>
        </div>

        {/* Right: Cart Icon + CTA Button + Hamburger */}
        <div className="nav-actions">
          <p className="totalitems">{totalItems} </p>
          <ShoppingBag
            className="cart-icon"
            size={24}
            onClick={() => navigate("/cart")}
            color="#fafafa"
          />

          <button className="cta-button" onClick={() => handleWhatsAppOrder()}>
            Order / Reserve
          </button>
          <div
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
