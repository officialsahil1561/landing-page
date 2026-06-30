import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import CoverShowcase from '../components/CoverShowcase';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <CoverShowcase />
      <Footer />
    </div>
  );
};

export default LandingPage;