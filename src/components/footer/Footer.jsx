import React from "react";
import { MailOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-[#555] " >
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 ">
        
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <a href="/about" className="block hover:text-[#1e88e5] text-sm">
            About Us
          </a>
          <a href="/privacypolicy" className="block hover:text-[#1e88e5] text-sm">
            Privacy Policy
          </a>
          <a href="/tnc" className="block hover:text-[#1e88e5] text-sm">
            Terms and Conditions
          </a>
          <a href="/refund-and-cancellation" className="block hover:text-[#1e88e5] text-sm">
            Refund and Cancellation Policy
          </a>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 ">Contact</h4>
          <p className="text-sm flex text-center items-center gap-1 mt-2 ">
            <MailOpen />
             chitramcinema@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} Chitramcinema. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
