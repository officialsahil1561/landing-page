import React from 'react';
import './CoverShowcase.css';

const CoverShowcase = () => {
  return (
    <div className="cover-showcase">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Style</h1>
          <p className="hero-subtitle">Discover the perfect cover to match your personality</p>
          <button className="cta-button">Shop Now</button>
        </div>
      </section>

      {/* Product Showcase Grid */}
      <section className="product-grid">
        <div className="product-card">
          <img src="/images/cover1.jpg" alt="Cover 1" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Classic Elegance</h2>
            <p className="product-description">A timeless design that never goes out of style</p>
            <span className="product-price">
              <span className="original-price">
                $29.99
              </span>
              <span className="discounted-price">
                $19.99
              </span>
            </span>
          </div>
        </div>
        <div className="product-card">
          <img src="/images/cover2.jpg" alt="Cover 2" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Modern Minimalism</h2>
            <p className="product-description">Clean lines and simple design for the modern lifestyle</p>
            <span className="product-price">
              <span className="original-price">
                $24.99
              </span>
              <span className="discounted-price">
                $14.99
              </span>
            </span>
          </div>
        </div>
        <div className="product-card">
          <img src="/images/cover3.jpg" alt="Cover 3" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Urban Chic</h2>
            <p className="product-description">A bold design that makes a statement in any room</p>
            <span className="product-price">
              <span className="original-price">
                $34.99
              </span>
              <span className="discounted-price">
                $24.99
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Brand Information Section */}
      <section className="brand-info">
        <h2 className="brand-title">About Our Brand</h2>
        <p className="brand-description">
          We are a passionate team dedicated to creating unique covers that reflect individuality and style. Our products are designed to enhance your space and make a statement.
        </p>
        <div className="brand-features">
          <div className="feature">
            <span className="feature-icon">✨</span>
            <span className="feature-text">Premium Quality Materials</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📦</span>
            <span className="feature-text">Fast and Free Shipping</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🛡️</span>
            <span className="feature-text">30-Day Money-Back Guarantee</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoverShowcase;