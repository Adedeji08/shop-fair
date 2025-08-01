import React from "react";
import { Book } from "../types";

interface BookCardProps {
  book: Book;
  showPrice?: boolean;
  isDarkMode: boolean;
  addToCart: () => void;
}

// export const BookCard: React.FC<BookCardProps> = ({
//   book,
//   showPrice = false,
//   isDarkMode,
//   addToCart,
// }) => (
//   <div
//     className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
//       isDarkMode ? "bg-gray-800" : "bg-white"
//     }`}
//   >
//     <div className="aspect-[3/4] overflow-hidden">
//       <img
//         src={book.cover}
//         alt={book.title}
//         className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//       />
//     </div>
//     <div className="p-4">
//       <h3
//         className={`font-semibold text-lg mb-1 ${
//           isDarkMode ? "text-white" : "text-gray-900"
//         }`}
//       >
//         {book.title}
//       </h3>
//       <p
//         className={`text-sm mb-3 ${
//           isDarkMode ? "text-gray-400" : "text-gray-600"
//         }`}
//       >
//         by {book.author}
//       </p>
//       {showPrice && (
//         <div className="flex items-center justify-between">
//           <span
//             className={`font-bold text-lg ${
//               isDarkMode ? "text-blue-400" : "text-blue-600"
//             }`}
//           >
//             ${(Math.random() * 20 + 10).toFixed(2)}
//           </span>
//           <button
//             onClick={addToCart}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
//           >
//             Add to Cart
//           </button>
//         </div>
//       )}
//     </div>
//   </div>
// );

  export const BookCard = ({ book, className = "" }: any) => {
    if (book.cover === "pink") {
      return (
        <div
          className={`${className} bg-gradient-to-br from-pink-300 via-rose-400 to-pink-500 rounded-sm shadow-md`}
        >
          <div className="h-full flex items-center justify-center">
            <div className="w-8 h-12 bg-white/30 rounded-sm"></div>
          </div>
        </div>
      );
    }
    if (book.cover === "teal") {
      return (
        <div
          className={`${className} bg-gradient-to-br from-teal-300 via-cyan-400 to-teal-500 rounded-sm shadow-md`}
        >
          <div className="h-full flex items-center justify-center">
            <div className="w-8 h-12 bg-white/30 rounded-sm"></div>
          </div>
        </div>
      );
    }
    if (book.cover === "gray") {
      return (
        <div
          className={`${className} bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 rounded-sm shadow-md`}
        >
          <div className="h-full flex items-center justify-center">
            <div className="text-gray-700 text-xs leading-tight">
              <div>━━━</div>
              <div>━━━</div>
              <div>━━━</div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };
