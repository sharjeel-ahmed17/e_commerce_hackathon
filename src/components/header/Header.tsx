import { Heart,  Search,  ShoppingCart } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between px-5 py-3 bg-gray-100 border-b border-gray-200">
      {/* Logo Section */}
      <div className="text-lg font-bold flex-shrink-0">Execulucive</div>

      {/* Navigation Menu */}
      <div className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-gray-700 mt-3 md:mt-0 md:justify-center justify-normal">
          <li className="cursor-pointer hover:text-gray-900">Home</li>
          <li className="cursor-pointer hover:text-gray-900">About</li>
          <li className="cursor-pointer hover:text-gray-900">Services</li>
          <li className="cursor-pointer hover:text-gray-900">Contact</li>
        </ul>
      </div>
<div className="flex  gap-2">
      {/* Search Box */}
      <div className="relative w-full md:w-auto mt-3 md:mt-0 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full md:w-auto px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Icons Section */}
      <div className="flex gap-4 items-center">
        <Heart className="text-red-500 cursor-pointer hover:scale-110" />
        <ShoppingCart className="text-gray-700 cursor-pointer hover:scale-110" />
      </div>

      </div>
    </header>
  );
};

export default Header;
