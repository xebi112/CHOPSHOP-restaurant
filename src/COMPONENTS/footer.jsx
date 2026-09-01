import React from "react";
import "./foter.css";

function Footer() {
  return (
    <footer className="about-footer" id="about">
      {/* Map Section */}
      <div className="map-section">
        <p className="about-text">Find Us On The Map</p>
        <div className="map-container" data-aos="zoom-in">
          <iframe
            src="https://maps.google.com/maps?q=27%20Kanfla%20Close,%20Asylum-Down&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            allowFullScreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>

      {/* Footer Content Grid */}
      <div className="footer-content">
        {/* Column 1: Brand & Socials */}
        <div className="footer-logo">
          <div className="footer-logo-wrapper">
            <span className="footer-logo-icon">🦀</span>
            <div className="footer-logo-text-stack">
              <span className="footer-logo-line-top"></span>
              <span className="footer-logo-line-bottom">
                CHOP SHOP RESTAURANT
              </span>
            </div>
          </div>
          <p className="footer-logo-caption">
            Good food, good vibes, and authentic Ghanaian flavors. Welcome to
            your favorite spot.
          </p>
          <div className="social-links">
            <a
              href="https://instagram.com/_xebicronwell"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a
              href="https://wa.me/233244422614"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-menu">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Column 3: Our Menu */}
        <div className="footer-menu">
          <h3>Our Menu</h3>
          <a href="#menu">Asanka Platter</a>
          <a href="#menu">Jollof Platter</a>
          <a href="#menu">Rice Dishes</a>
          <a href="#menu">Sides</a>
          <a href="#menu">Drinks</a>
          <a href="#menu">Desserts</a>
        </div>

        {/* Column 4: Contact Us Details */}
        <div className="about-details">
          <h3>Contact Us</h3>
          <div className="footer-info-block">
            <h5>
              <i className="fas fa-location-dot"></i> Location
            </h5>
            <span>LABONE </span>
          </div>

          <div className="footer-info-block">
            <h5>
              <i className="fas fa-phone-alt"></i> For Orders Call Us
            </h5>
            <span>+233 244 222 202</span>
          </div>

          <div className="footer-info-block">
            <h5>
              <i className="fas fa-envelope"></i> Email
            </h5>
            <span>COCOEATSLABONE@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
