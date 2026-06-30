import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.brandLogo}>
          {/* Brand logo placeholder - should be replaced with actual logo component */}
          <h1 className={styles.brandName}>CoverCraft</h1>
        </div>
        
        <div className={styles.heroContent}>
          <h2 className={styles.heroTitle}>Elevate Your Style with Premium Covers</h2>
          <p className={styles.heroSubtitle}>Discover our collection of high-quality, stylish covers designed to enhance your daily experience.</p>
          
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButton}>Shop Now</button>
            <button className={styles.ctaButtonSecondary}>View Collection</button>
          </div>
        </div>
        
        <div className={styles.productShowcase}>
          {/* Product cards will be added here in a real implementation */}
          <div className={styles.productCard}>
            <img src="https://via.placeholder.com/150" alt="Cover 1" className={styles.productImage} />
            <p className={styles.productTitle}>Modern Minimalist Cover</p>
            <p className={styles.productPrice}>$29.99</p>
          </div>
          <div className={styles.productCard}>
            <img src="https://via.placeholder.com/150" alt="Cover 2" className={styles.productImage} />
            <p className={styles.productTitle}>Classic Elegance Cover</p>
            <p className={styles.productPrice}>$39.99</p>
          </div>
          <div className={styles.productCard}>
            <img src="https://via.placeholder.com/150" alt="Cover 3" className={styles.productImage} />
            <p className={styles.productTitle}>Urban Chic Cover</p>
            <p className={styles.productPrice}>$24.99</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;