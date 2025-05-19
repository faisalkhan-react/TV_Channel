import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, phoneNumber } = useSelector((state) => state.auth);

  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-white shadow-sm border-b border-gray-200">
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

      <div className="flex gap-3 items-center">
        <div>
          <Link to="/subscribe">
          <button className="bg-[#1e88e5] text-white px-4 py-2 text-sm font-semibold rounded hover:bg-[#1565c0] transition">
            Subscribe
          </button>
          </Link>
        </div>
        {isAuthenticated ? (
          <div className="flex items-center gap-2 px-4 py-2 border rounded border-green-500 text-green-600 bg-green-50 font-medium">
            <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
              {phoneNumber.slice(-2)}
            </span>
            {phoneNumber}
            <button
              onClick={() => dispatch(logout())}
              className="ml-2 text-red-500 hover:text-red-700 text-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="border border-[#1e88e5] text-[#1e88e5] px-4 py-2 text-sm font-semibold rounded hover:bg-[#e3f2fd] transition"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
