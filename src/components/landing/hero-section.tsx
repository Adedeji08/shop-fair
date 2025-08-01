import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="relative h-96 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Discover Your Next Literary Adventure
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Explore our curated collection of new releases, rare finds, and
            timeless classics.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
            Shop Now
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
