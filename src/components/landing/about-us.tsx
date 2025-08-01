import React from "react";

interface AboutProps {
  isDarkMode: boolean;
}

export const AboutUs: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <>
      {/* About Us */}
      <section
        className={`py-16 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p
            className={`text-lg leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Book Haven is a family-owned bookstore dedicated to providing a
            curated selection of books for readers of all ages. Our passion for
            literature drives us to seek out unique and compelling stories, from
            bestsellers to hidden gems. We believe in the power of books to
            inspire, educate, and connect people, and we strive to create a
            welcoming space for book lovers to discover their next favorite
            read.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <div className="space-y-2">
            <p>Email: support@bookhaven.com</p>
            <p>Phone: (555) 123-4567</p>
            <p>Address: 123 Main Street, Anytown, USA</p>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Facebook
            </a>
          </div>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            Book Inquiry
          </button>
        </div>
      </section>
    </>
  );
};
