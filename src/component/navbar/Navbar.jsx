import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-[#F9FAFB]">
      <Link to="/" className="navbar-logo">Chitramcinema</Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-buttons">
      <button className="btn btn-filled">Subscribe</button>

        <Link to="/login" className="btn btn-outline">
          Login
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
