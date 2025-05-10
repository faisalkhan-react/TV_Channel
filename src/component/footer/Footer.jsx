import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-[#555]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-bold text-[#1e88e5] mb-2">
            Chitramcinema
          </div>
          <p className="text-sm">
            ChitramCinema helps individuals and startups scale fast with modern
            web solutions. We believe in innovation, simplicity, and impact.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <a href="/" className="block hover:text-[#1e88e5] text-sm">
            Home
          </a>
          <a href="/about" className="block hover:text-[#1e88e5] text-sm">
            About
          </a>
          <a href="/contact" className="block hover:text-[#1e88e5] text-sm">
            Contact
          </a>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm">✉️ chitramcinema@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} Chitramcinema. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
