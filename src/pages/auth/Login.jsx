import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [phone, setPhone] = useState({ phoneNumber: "" });
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const adddata = (e) => {
    const { name, value } = e.target;
    setPhone((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullPhoneNumber = "+91" + phone.phoneNumber.trim();

    // axios - login

    try {
      const response = await fetch(
        "https://tv-server-1.onrender.com/api/user/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phoneNumber: fullPhoneNumber }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setShowOtpInput(true);
        setError("");
        setSuccessMessage("OTP sent successfully!");
      } else {
        setError(data.message || "Failed to send OTP");
        setSuccessMessage("");
      }
    } catch (err) {
      console.error("Send OTP error:", err);
      setError("Something went wrong");
      setSuccessMessage("");
    }
  };

  const handleOtpChange = (e) => {
    const val = e.target.value;
    if (/^\d{0,4}$/.test(val)) {
      setOtp(val);
    }
  };

  const handleOtpVerify = async () => {
    const fullPhoneNumber = "+91" + phone.phoneNumber.trim();

    try {
      const response = await fetch(
        "https://tv-server-1.onrender.com/api/user/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: fullPhoneNumber,
            otp: otp,
          }),
        }
      );

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        setSuccessMessage("✅ OTP verified successfully!");
        setError("");
        localStorage.setItem("user", data?.token);
        dispatch(login(fullPhoneNumber)); // Redux login
        navigate("/"); // Redirect to home or any other page
      } else {
        setError(data.message || "❌ Incorrect OTP");
        setSuccessMessage("");
      }
    } catch (err) {
      console.error("Verify OTP error:", err);
      setError("Something went wrong during OTP verification");
      setSuccessMessage("");
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
          <label
            htmlFor="phone"
            className="text-sm font-bold mb-2 text-[#1e1e1e]"
          >
            Mobile Number
          </label>
          <div className="flex items-center border border-indigo-600 rounded">
            <span className="px-2 py-4 bg-gray-200 text-[#1e1e1e] rounded-l">
              +91
            </span>
            <input
              className="text-[#1e1e1e] w-full h-6 px-2 py-4 outline-none rounded-r"
              type="tel"
              id="phone"
              name="phoneNumber"
              maxLength={10}
              value={phone.phoneNumber}
              onChange={adddata}
              placeholder="Enter 10-digit number"
            />
          </div>
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          Get code
        </button>
      </form>

      {showOtpInput && (
        <div className="w-[65%] mt-6">
          <label
            htmlFor="otp"
            className="text-sm font-bold mb-2 text-[#1e1e1e]"
          >
            Enter OTP
          </label>
          <input
            className="text-[#1e1e1e] w-full h-6 rounded border border-green-600 px-2 py-4 mt-2"
            type="text"
            id="otp"
            maxLength={4}
            value={otp}
            onChange={handleOtpChange}
            placeholder="Enter 4-digit OTP"
          />
          <button
            className="cursor-pointer w-full mt-4 bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700"
            onClick={handleOtpVerify}
          >
            Verify OTP
          </button>
        </div>
      )}

      {successMessage && (
        <p className="text-green-600 mt-4 font-medium">{successMessage}</p>
      )}
      {error && <p className="text-red-600 mt-2 font-medium">{error}</p>}
    </div>
  );
};

export default Login;
