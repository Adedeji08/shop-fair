import React, { useState } from "react";
import { Search, ChevronRight, ImageIcon } from "lucide-react";
import Header from "../../components/landing/header";
import HeroSection from "../../components/landing/hero-section";
import { BookCard } from "../../components/landing/book-card";
import { BookCatalogue } from "../../components/landing/book-section";
import { AboutUs } from "../../components/landing/about-us";
import Footer from "../../components/landing/footer";

const BookStore = () => {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [inquiryMessage, setInquiryMessage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "The Secret Garden",
      author: "Amelia Stone",
      price: 12.99,
      cover: "pink",
    },
    {
      id: 2,
      title: "The Lost City",
      author: "Ethan Clarke",
      price: 14.99,
      cover: "teal",
    },
    {
      id: 3,
      title: "Whispers of the Wind",
      author: "Olivia Reed",
      price: 11.99,
      cover: "gray",
    },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const shipping = 5.0;
  const tax = subtotal * 0.0875;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        isDarkMode={isDarkMode}
        cartCount={cartCount}
        toggleTheme={toggleTheme}
      />

      <HeroSection setShowCart={setShowCart} />
      {/* Featured Books */}
      <BookCatalogue />

      {/* About Section */}
      <AboutUs setShowInquiry={setShowInquiry} />

      {/* Footer */}
      <Footer />

      {/* Book Inquiry Modal */}
      {showInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowInquiry(false)}
          ></div>
          <div className="relative bg-[#2d3142] rounded-lg max-w-2xl w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-2">
                Book Inquiry
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Ask a question about the book's condition, provenance, edition,
                or any other inquiries you may have.
              </p>

              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-4">Customer Service</p>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-medium">CS</span>
                  </div>
                  <div className="bg-[#3d4155] rounded-lg p-3 max-w-md">
                    <p className="text-white text-sm">
                      Hello! How can I assist you today with your book inquiry?
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-[#3d4155] text-white px-4 py-3 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-[#3d4155] text-gray-400 p-3 rounded-lg hover:bg-[#4d5165] transition-colors">
                  <ImageIcon className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setShowInquiry(false)}
                className="mt-6 w-full bg-[#3d4155] text-white py-3 rounded-lg hover:bg-[#4d5165] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shopping Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="relative bg-white rounded-lg max-w-2xl w-full shadow-xl">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Your Cart
              </h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <BookCard book={item} className="w-16 h-20" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">by {item.author}</p>
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Subtotal
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Items (3)</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="text-gray-500">
                      Calculated at next step
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span className="text-gray-500">
                      Calculated at next step
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setShowCart(false);
                  setShowCheckout(true);
                }}
                className="w-full mt-8 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowCheckout(false)}
          ></div>
          <div className="relative bg-[#1e1f28] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <span>Shopping Bag</span>
                <span>/</span>
                <span className="text-white">Checkout</span>
              </div>

              <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

              <div className="mb-8">
                <h2 className="text-lg font-medium text-white mb-4">
                  Order Summary
                </h2>
                {cartItems.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-4 mb-4">
                    <BookCard book={item} className="w-12 h-16" />
                    <div className="flex-1">
                      <h3 className="text-white">{item.title}</h3>
                      <p className="text-gray-400 text-sm">
                        By{" "}
                        {index === 0
                          ? "Clara Bennett"
                          : index === 1
                          ? "Owen Carter"
                          : "Sophia Hayes"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>$45.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Taxes</span>
                  <span>$3.75</span>
                </div>
                <div className="flex justify-between text-white font-medium text-lg pt-2 border-t border-gray-700">
                  <span>Total</span>
                  <span>$53.75</span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-medium text-white mb-4">
                  Payment Method
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm block mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="w-full bg-[#2a2b35] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-sm block mb-1">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full bg-[#2a2b35] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm block mb-1">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full bg-[#2a2b35] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm block mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      placeholder="Enter name on card"
                      className="w-full bg-[#2a2b35] text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <label className="flex items-center gap-2 mb-6">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-gray-400 text-sm">
                  Save this card for future purchases
                </span>
              </label>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Pay $53.75
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Modal */}
      {showDashboard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowDashboard(false)}
          ></div>
          <div className="relative bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-8">
                Your Dashboard
              </h1>

              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Pending Orders
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">
                        Status: Processing
                      </p>
                      <p className="text-gray-500 text-sm">Order #1234567890</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Track
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">
                        Status: Shipped
                      </p>
                      <p className="text-gray-500 text-sm">Order #9876543210</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Track
                    </button>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Order History
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">
                        The Secret Garden
                      </p>
                      <p className="text-gray-500 text-sm">Order #1122334455</p>
                    </div>
                    <span className="font-bold text-gray-900">$15.99</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">
                        The Great Gatsby
                      </p>
                      <p className="text-gray-500 text-sm">Order #5544332211</p>
                    </div>
                    <span className="font-bold text-gray-900">$12.50</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Payment History
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">
                      Status: Completed
                    </p>
                    <p className="text-gray-500 text-sm">
                      Transaction ID: 6677889900
                    </p>
                    <p className="font-bold text-gray-900 mt-1">$28.49</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Status: Refunded
                    </p>
                    <p className="text-gray-500 text-sm">
                      Transaction ID: 0099887766
                    </p>
                    <p className="font-bold text-gray-900 mt-1">$15.99</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Support
                </h2>
                <button className="w-full text-left p-3 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                  <span className="text-gray-900">Request Cancellation</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </button>
                <button className="w-full text-left p-3 hover:bg-gray-50 transition-colors flex items-center justify-between group">
                  <span className="text-gray-900">Request Return</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                </button>
              </div>

              <div className="border-t pt-6">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  Profile
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Contact Information
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Email: sophia.clark@email.com
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      Shipping Address
                    </h3>
                    <p className="text-gray-500 text-sm">
                      123 Oak Street, Anytown, CA 91234
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookStore;
