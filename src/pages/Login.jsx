import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length === 10) {
      console.log("OTP sent to:", phone);
      navigate("/verify-otp", { state: { phone } });
    } else {
      alert("Enter a valid 10-digit number");
    }
  };

  return (
    <div className="w-[30%] border border-indigo-600 mt-10 mb-10 mx-auto flex flex-col items-center rounded-md p-6">
      <form onSubmit={handleSubmit} className="w-[65%]">
        <h4 className="text-[#1e1e1e] text-xl font-bold flex justify-center p-4">
          Login
        </h4>
        <hr className="mb-4 text-[#1e1e1e]" />
        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="text-sm font-bold mb-2 text-[#1e1e1e]">
            Mobile Number
          </label>
          <input
            className="text-[#1e1e1e] w-full h-6 rounded border border-indigo-600 px-2 py-4"
            type="tel"
            id="phone"
            maxLength={10}
            value={phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) setPhone(value);
            }}
            placeholder="Enter 10-digit number"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          Get code
        </button>
      </form>
    </div>
  );
};

export default Login;
