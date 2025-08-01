import React from "react";
import {
  featuredBooks,
  newArrivals,
  rareBooks,
} from "../../pages/landing/data";
import { BookCard } from "./book-card";

interface BookCardProps {
  //   book: Book;
  //   showPrice?: boolean;
  isDarkMode: boolean;
  addToCart: () => void;
}

export const BookCatalogue: React.FC<BookCardProps> = ({
  isDarkMode,
  addToCart,
}) => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              showPrice={true}
              isDarkMode={isDarkMode}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section
        className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {newArrivals.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                isDarkMode={isDarkMode}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rare Books */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Rare Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {rareBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              showPrice={true}
              isDarkMode={isDarkMode}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
};


