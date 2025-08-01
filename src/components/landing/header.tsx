import { BookOpen, Moon, ShoppingCart, Sun, User } from "lucide-react";
import React from "react";

type Props = {};
interface BookCardProps {
  isDarkMode: boolean;
  cartCount?: number;
  toggleTheme?: () => void;
}
export const Header: React.FC<BookCardProps> = ({
  isDarkMode,
  cartCount = 0,
  toggleTheme = () => {},
}) => {
  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-800 shadow-gray-700/20"
            : "bg-white shadow-gray-200"
        } shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Canndle </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className={`hover:text-blue-600 transition-colors ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                New Arrivals
              </a>
              <a
                href="#"
                className={`hover:text-blue-600 transition-colors ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Rare Books
              </a>
              <a
                href="#"
                className={`hover:text-blue-600 transition-colors ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Genres
              </a>
              <a
                href="#"
                className={`hover:text-blue-600 transition-colors ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Authors
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <div className="relative">
                <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-blue-600 transition-colors" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
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
