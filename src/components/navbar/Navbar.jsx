import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, phoneNumber } = useSelector((state) => state.auth);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-[#0F172A] text-white p-4 sm:flex flex justify-between items-center z-50">
      {/* Logo */}
      <div>
        <h2 className="font-semibold text-lg">
          <Link to="/">Chitramcinema</Link>
        </h2>
      </div>

      {/* Nav Sections */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50">
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
      <div className="space-x-2">
        <button className="hidden sm:block bg-blue-500 py-1.5 px-3 rounded text-xs font-semibold">
          <Link to="/subscribe">Subscribe</Link>
        </button>
      </div>
      <div>
        <button className="bg-blue-500 py-1.5 px-3 rounded text-xs font-semibold">
          Login
        </button>
      </div>
      <button>
        <Search className="w-6 h-6" />
      </button>
      <button onClick={() => setIsSidebarOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Navbar;
