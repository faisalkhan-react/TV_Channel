import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">GrowUpp</div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-buttons">
        <button className="btn btn-outline">Signup</button>
        <button className="btn btn-filled">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
