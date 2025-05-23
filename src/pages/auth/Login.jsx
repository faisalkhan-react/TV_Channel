import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import banner from "../../assets/ott3.webp";
// import banner from "../../assets/smart-home-automation-innovation-technology-convenience-comfort_951586-140205.avif";
import { sendOtp, verifyOtp } from "../../redux/auth/authSl";

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

    try {
      await dispatch(sendOtp({ phoneNumber: fullPhoneNumber })).unwrap();
      setShowOtpInput(true);
      setError("");
      setSuccessMessage("OTP sent successfully!");
    } catch (err) {
      console.error("Send OTP error:", err);
      setError(err.message || "Failed to send OTP");
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
      const result = await dispatch(
        verifyOtp({ phoneNumber: fullPhoneNumber, otp })
      ).unwrap();

      setSuccessMessage("✅ OTP verified successfully!");
      setError("");
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } catch (err) {
      console.error("Verify OTP error:", err);
      setError(err.message || "❌ Incorrect OTP");
      setSuccessMessage("");
    }
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-45 z-0" />

      {/* Glass form */}
      <div className="relative w-[90%] max-w-md mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] border border-white/30 z-10">

        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-white text-2xl font-bold text-center mb-6">
            Login to Continue
          </h2>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="phone"
              className="text-sm font-semibold mb-2 text-white"
            >
              Mobile Number
            </label>
            <div className="flex items-center border border-white/30 rounded overflow-hidden bg-white/10">
              <span className="px-3 py-3 bg-white/20 text-white text-sm">+91</span>
              <input
                className="w-full bg-transparent text-white px-3 py-3 outline-none placeholder:text-white/60"
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
            className="mt-2 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 rounded hover:scale-[1.03] transition-all duration-300"
          >
            Get code
          </button>
        </form>

        {showOtpInput && (
          <div className="mt-6">
            <label
              htmlFor="otp"
              className="text-sm font-semibold mb-2 text-white block"
            >
              Enter OTP
            </label>
            <input
              className="w-full bg-transparent text-white border border-green-400 px-3 py-3 rounded mt-1 placeholder:text-white/60"
              type="text"
              id="otp"
              maxLength={4}
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter 4-digit OTP"
            />
            <button
              onClick={handleOtpVerify}
              className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2 rounded hover:scale-[1.03] transition-all duration-300"
            >
              Verify OTP
            </button>
          </div>
        )}

        {successMessage && (
          <p className="text-green-400 mt-4 font-medium text-center">{successMessage}</p>
        )}
        {error && (
          <p className="text-red-400 mt-2 font-medium text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
