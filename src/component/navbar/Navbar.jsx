import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-200">
      <Link to="/" className="text-2xl font-bold text-[#1e88e5]">
        Chitramcinema
      </Link>
      <div className="flex gap-6 text-[#555] font-semibold">
        <Link to="/" className="hover:text-[#1e88e5] transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-[#1e88e5] transition">
          About
        </Link>
        <Link to="/contact" className="hover:text-[#1e88e5] transition">
          Contact
        </Link>
      </div>
      <div className="flex gap-3">
        <button className="bg-[#1e88e5] text-white px-4 py-2 text-sm font-semibold rounded hover:bg-[#1565c0] transition">
          Subscribe
        </button>
        <Link
          to="/login"
          className="border border-[#1e88e5] text-[#1e88e5] px-4 py-2 text-sm font-semibold rounded hover:bg-[#e3f2fd] transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
