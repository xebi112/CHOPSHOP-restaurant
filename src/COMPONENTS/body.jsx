import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { categories, fullMenu } from "./DATA/fooddata";
import { Mycontext } from "./contexts/cartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper & Local Styles
import "swiper/css";
import "./body.css";

function Body() {
  const { addtocart, handlequantitychange, quantity } = useContext(Mycontext);
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  // Filter menu items by active category selection
  const filteredMenu =
    activeCategory === "All"
      ? fullMenu
      : fullMenu.filter((item) => item.category === activeCategory);

  return (
    <div>
      <section id="menu" className="menu-section">
        {/* Section Header */}
        <div className="section-header">
          <p>EXPLORE OUR</p>
          <h2>MENU CATEGORIES</h2>
          <p>
            Authentic Ghanaian flavors, crafted with love and delivered to you.
          </p>
        </div>

        {/* Category Filter Carousel */}
        <div className="filter-tabs-wrapper">
          <button className="custom-prev-btn" aria-label="Previous Category">
            ‹
          </button>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next-btn",
              prevEl: ".custom-prev-btn",
            }}
            spaceBetween={12}
            slidesPerView="auto"
            className="filter-tabs"
          >
            {/* "ALL" Tab */}
            <SwiperSlide style={{ width: "auto" }}>
              <button
                className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
                onClick={() => setActiveCategory("All")}
              >
                <span className="cat-name">ALL</span>
              </button>
            </SwiperSlide>

            {/* Dynamic Categories */}
            {categories.map((showcat) => (
              <SwiperSlide
                key={showcat.id || showcat.category}
                style={{ width: "auto" }}
              >
                <button
                  className={`filter-btn ${
                    activeCategory === showcat.category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(showcat.category)}
                >
                  <div className="cat-img-wrapper">
                    <img
                      src={showcat.image}
                      alt={showcat.category}
                      loading="lazy"
                    />
                  </div>
                  <span className="cat-name">{showcat.category}</span>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-next-btn" aria-label="Next Category">
            ›
          </button>
        </div>

        {/* Food Menu Grid */}
        <div className="menu-grid">
          {filteredMenu.map((dish) => {
            const currentQty = quantity[dish.id] || 1;

            return (
              <div key={dish.id} className="food-card">
                <div className="card-image-wrapper">
                  <img src={dish.image} alt={dish.name} loading="lazy" />
                  <span className="price-tag">GH₵ {dish.price}</span>
                </div>

                <div className="card-content">
                  <h3 className="dish-name">{dish.name}</h3>
                  <p>{dish.description}</p>

                  <div className="card-actions">
                    <div className="quantity-controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => handlequantitychange(dish.id, -1)}
                      >
                        −
                      </button>
                      <span className="qty-count">{currentQty}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => handlequantitychange(dish.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="card-order-btn"
                      onClick={() =>
                        addtocart({ ...dish, quantity: currentQty })
                      }
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button to Full Menu View */}
        <button
          className="view-dishes-btn"
          onClick={() => navigate("/full-menu")}
        >
          VIEW ALL DISHES
        </button>
      </section>
    </div>
  );
}

export default Body;
