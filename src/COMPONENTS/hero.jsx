import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "./hero.css";

import "swiper/css";
import "swiper/css/effect-fade";
import "./hero.css";

const heroBackgrounds = ["/JOLLOF-1.jpg", "/BANKU-5.jpg", "/BANKU-4.jpg"];

function Hero({ handleWhatsAppOrder }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOpen(hour >= 12 && hour < 23);
    };
    checkOpenStatus();
  }, []);

  return (
    <header id="home" className="hero">
      {/* Background Swiper */}
      <div className="hero-slider-bg">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          allowTouchMove={false}
          className="hero-bg-swiper"
        >
          {heroBackgrounds.map((bgImg, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide-image zoom-effect"
                style={{ backgroundImage: `url(${bgImg})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Vignette Overlay */}
      <div className="hero-overlay"></div>

      {/* Main Foreground Content */}
      <div className="hero-content">
        <div className="status-badge">
          <span className={`status-dot ${isOpen ? "open" : "closed"}`}></span>
          {isOpen
            ? "Open Now • Closes at 11 PM"
            : "Closed • Opens Daily at 12 PM"}
        </div>

        <div className="lounge-header">
          <h1>CHOP SHOP</h1>
          <h3>
            GOOD FOOD <span className="dot">•</span> GOOD VIBES
          </h3>
        </div>

        <div className="hero-buttons">
          <a href="#menu" className="btn primary">
            View Our Menu
          </a>
          <button className="btn secondary" onClick={handleWhatsAppOrder}>
            BOOK A RESERVATION
          </button>
        </div>
      </div>
    </header>
  );
}

export default Hero;
