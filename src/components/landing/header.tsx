import { BookOpen, Moon, ShoppingCart, Sun, User } from "lucide-react";
import React from "react";

export const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Canndle </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-600 transition-colors">
                New Arrivals
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Rare Books
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Genres
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Authors
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-blue-600 transition-colors" />
              </div>

              <User className="h-6 w-6 cursor-pointer hover:text-blue-600 transition-colors" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
