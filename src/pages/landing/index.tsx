import React, { useState } from "react";
import Header from "../../components/landing/header";
import HeroSection from "../../components/landing/hero-section";
import Footer from "../../components/landing/footer";
import { BookCatalogue } from "../../components/landing/book-section";
import { AboutUs } from "../../components/landing/about-us";

const BookHavenApp: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header
        isDarkMode={isDarkMode}
        cartCount={cartCount}
        toggleTheme={toggleTheme}
      />

      {/* <HeroSection /> */}
      {/* Featured Books */}

      {/* <BookCatalogue isDarkMode={isDarkMode} addToCart={addToCart} /> */}

      {/* <AboutUs isDarkMode={isDarkMode} /> */}
      {/* <Footer isDarkMode={isDarkMode} /> */}
    </div>
  );
};

export default BookHavenApp;
