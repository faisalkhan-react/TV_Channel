import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const res = await axios.post(
        "https://tv-server-1.onrender.com/api/admin-login",
        data
      );

      const token = res.data.token;

      // Save token to localStorage
      localStorage.setItem("adminToken", token);

      // Clear the form
      setEmail("");
      setPassword("");

      // Navigate to admin dashboard
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Optionally show error to user
    }
  };

  return (
    <div className="flex items-center justify-center h-120 bg-gray-100">
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
