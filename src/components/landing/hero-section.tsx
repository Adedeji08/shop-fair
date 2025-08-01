import React from "react";

interface HeroProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeroSection: React.FC<HeroProps> = ({
  setShowCart
}) => {
  return (
        <section
        className="relative h-[600px] mb-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg width='1400' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='books' x='0' y='0' width='120' height='120' patternUnits='userSpaceOnUse'%3E%3Crect x='10' y='20' width='25' height='80' fill='%23654321'/%3E%3Crect x='40' y='25' width='22' height='75' fill='%238B4513'/%3E%3Crect x='67' y='15' width='28' height='85' fill='%23A0522D'/%3E%3Crect x='100' y='22' width='20' height='78' fill='%23D2691E'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='1400' height='600' fill='%238B6F47'/%3E%3Crect width='1400' height='600' fill='url(%23books)' opacity='0.7'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-7xl font-bold mb-8">
              Discover Your Next Literary
              <br />
              Adventure
            </h1>
            <p className="text-2xl mb-10 text-gray-100">
              Explore our curated collection of new releases, rare finds, and
              timeless classics.
            </p>
            <button
              onClick={() => setShowCart(true)}
              className="bg-blue-600 text-white px-12 py-5 rounded-md text-xl font-medium hover:bg-blue-700 transition-colors shadow-lg"
            >
              Shop Now
            </button>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
