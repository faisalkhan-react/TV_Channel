import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, phoneNumber } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ${
        !scrolled ? "bg-[rgba(0,0,0,0.3)]" : "bg-[rgba(0,0,0,1)]"
      } p-4 flex justify-between items-center z-50 text-white`}
    >
      {/* Logo */}
      <div className="">
        <h2 className="hidden sm:block font-semibold text-sm md:text-md lg:text-lg text-[#2162ca]">
          <Link to="/">Chitramcinema</Link>
        </h2>
      </div>

      <div className="hidden lg:flex md:flex-1 justify-center items-center ">
        <nav className="flex gap-4 text-md">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/political-series">Political Series</Link>
          <Link to="/health&fitness">Health & Fitness</Link>
        </nav>
      </div>

      <div className="md:w-[300px] mr-2">
        <button className="mr-2 w-full">
          <div className="flex items-center justify-between px-2 bg-gray-200 h-7 w-full  rounded-md p-1 px-0.5 lg:px-2">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              className="text-xs text-gray-500 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="size-4 md:size-5 text-gray-600" />
          </div>
        </button>
      </div>

      {/* Nav Sections */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 text-white">
          <div className="w-64 bg-[#0F172A] h-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-md  ">
              <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                Home
              </Link>
              <Link to="/movies" onClick={() => setIsSidebarOpen(false)}>
                Movies
              </Link>
              <Link
                to="/political-series"
                onClick={() => setIsSidebarOpen(false)}
              >
                Political Series
              </Link>
              <Link
                to="/health&fitness"
                onClick={() => setIsSidebarOpen(false)}
              >
                Health & Fitness
              </Link>
              <button className="sm:hidden bg-blue-500 p-2 rounded text-xs font-semibold">
                <Link to="/subscribe">Subscribe</Link>
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Buttons */}

      <div className="button flex justify-end items-center gap-2 text-white">
        <div className="space-x-2">
          <button className="hidden sm:block bg-[#2162ca] py-1.5 px-3 rounded text-xs font-semibold">
            <Link to="/subscribe">Subscribe</Link>
          </button>
        </div>

        <button className="bg-[#2162ca] py-1.5 px-3 rounded text-xs font-semibold ">
          <Link to="/login">Login</Link>
        </button>
        <div className="">
          <button
            className="lg:hidden flex justify-center items-center text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
