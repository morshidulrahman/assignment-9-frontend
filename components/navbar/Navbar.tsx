"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 text-white px-4 py-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-lg">Navbar</div>
        <button
          className="md:hidden flex flex-col justify-center items-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 mb-1 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 mb-1 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#" className="hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      <ul
        className={`md:hidden bg-gray-800 w-full mt-2 flex flex-col space-y-2 px-2 transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
