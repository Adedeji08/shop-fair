import React from "react";
import { Book } from "../types";

interface BookCardProps {
  book: Book;
  showPrice?: boolean;
  isDarkMode: boolean;
  addToCart: () => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  showPrice = false,
  isDarkMode,
  addToCart,
}) => (
  <div
    className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      isDarkMode ? "bg-gray-800" : "bg-white"
    }`}
  >
    <div className="aspect-[3/4] overflow-hidden">
      <img
        src={book.cover}
        alt={book.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3
        className={`font-semibold text-lg mb-1 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {book.title}
      </h3>
      <p
        className={`text-sm mb-3 ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        by {book.author}
      </p>
      {showPrice && (
        <div className="flex items-center justify-between">
          <span
            className={`font-bold text-lg ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            ${(Math.random() * 20 + 10).toFixed(2)}
          </span>
          <button
            onClick={addToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  </div>
);
