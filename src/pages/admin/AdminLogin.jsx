import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch
import { loginAdmin } from "../../redux/auth/adminAuthSlice.js";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = JSON.parse(localStorage.getItem("user")) || {}; // Get user from local storage
  const dispatch = useDispatch(); // Initialize the hook
  const navigate = useNavigate(); // Initialize the hook
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      navigate("/admin/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };

    const result = await dispatch(loginAdmin(credentials));

    if (loginAdmin.fulfilled.match(result)) {
      console.log("Login successful:", result.payload);
      const admin = result.payload;

      // localStorage.setItem("admin", JSON.stringify(admin));

      navigate("/admin/dashboard");
    } else {
      console.error("Login failed:", result.error.message);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-120 
      relative bg-gray-100 h-screen border"
    >
      <Link to="/" className="absolute top-10 left-10 cursor-pointer">
        Home
      </Link>
      <div className="w-[26rem] p-10 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Enter Admin Login Details
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-4 py-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-4 py-3"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
