import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
interface AboutProp {
  setShowInquiry: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AboutUs: React.FC<AboutProp> = ({
  setShowInquiry
}) => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-5xl">
          Book Haven is a family-owned bookstore dedicated to providing a
          curated selection of books for readers of all ages. Our passion for
          literature drives us to seek out unique and compelling stories, from
          bestsellers to hidden gems. We believe in the power of books to
          inspire, educate, and connect people, and we strive to create a
          welcoming space for book lovers to discover their next favorite read.
        </p>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="text-gray-700 text-lg mb-8">
            Email: support@bookhaven.com Phone: (555) 123-4567 Address: 123 Main
            Street, Anytown, USA
          </p>

          <div className="flex gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={() => setShowInquiry(true)}
            className="text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            Book Inquiry
          </button>
        </div>
      </div>
    </section>
  );
};
