import React, { useState } from 'react';
import { UserCircle, LogOut } from 'lucide-react';

export default function Profile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Example user
  const user = {
    name: 'Faisal Khan',
    phone: '+91 8051941891',
  };

  const handleLogout = () => {
    alert('Logging out...');
    // Clear session or redirect logic here
  };

  return (
    <div className="w-full flex justify-end px-6 py-4 bg-white shadow-md relative z-50">
      <div className="relative inline-block text-left">
        {/* Avatar Icon */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <UserCircle className="w-9 h-9 text-gray-700 hover:text-blue-600 transition duration-200" />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-xl shadow-xl z-50 p-4">
            <p className="text-sm font-semibold text-gray-800">{user.name}</p>
            <p className="text-sm text-gray-500 mb-4">{user.phone}</p>
            <button
              onClick={handleLogout}
              className="cursor-pointer flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
            >
              <LogOut className=" w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
