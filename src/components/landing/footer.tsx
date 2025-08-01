import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 border-t">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-6 space-x-8">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Contact Us
          </a>
        </div>
        <p className="text-gray-500">©2025 Canddle. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
