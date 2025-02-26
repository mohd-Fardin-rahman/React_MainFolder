import React from "react";

const NavigationBar = () => {
  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href="/" className="text-xl font-bold">ShopZone</a>
        <button className="lg:hidden text-white focus:outline-none">
          ☰
        </button>
        <div className="hidden lg:flex space-x-6">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/products" className="hover:text-gray-300">Products</a>

          {/* Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300">Categories ▼</button>
            <div className="absolute hidden group-hover:block bg-gray-800 text-white rounded shadow-lg mt-2">
              <a href="/Cars" className="block px-4 py-2 hover:bg-gray-700">Cars</a>
              <a href="/Bikes" className="block px-4 py-2 hover:bg-gray-700">Bikes</a>
              <hr className="border-gray-600" />
              <a href="/" className="block px-4 py-2 hover:bg-gray-700">Clothes</a>
              <a href="/Shoes" className="block px-4 py-2 hover:bg-gray-700">Shoes</a>
              <a href="/watches" className="block px-4 py-2 hover:bg-gray-700">Watches</a>
            </div>
          </div>

          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
