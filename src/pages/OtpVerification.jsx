import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();

  // Start countdown when page loads
  useEffect(() => {
    const timer =
      resendTimer > 0 &&
      setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);

    if (resendTimer === 0) {
      setCanResend(true);
    }

    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      console.log("OTP Verified:", otp);
      alert("Phone Verified!");
      navigate("/");
    } else {
      alert("Enter 4-digit OTP");
    }
  };

  const handleResendOtp = () => {
    if (canResend) {
      console.log("Resending OTP to:", state?.phone);
      setResendTimer(60); // reset timer
      setCanResend(false);
      alert(`OTP resent to ${state?.phone}`);
    }
  };

  return (
    <div className="w-[30%] border border-indigo-600 mt-10 mb-10 mx-auto flex flex-col items-center rounded-md p-6">
      <form onSubmit={handleVerify} className="w-[65%]">
        <h4 className="text-[#1e1e1e] text-xl font-bold flex justify-center p-4">
          Verify OTP
        </h4>
        <p className="text-sm mb-4 text-center text-[#1e1e1e]">
          OTP sent to: <span className="font-semibold">{state?.phone}</span>
        </p>
        <div className="flex flex-col mb-4">
          <label htmlFor="otp" className="text-sm font-bold mb-2 text-[#1e1e1e]">
            Enter OTP
          </label>
          <input
            className="text-[#1e1e1e] w-full h-6 rounded border border-indigo-600 px-2 py-4"
            type="text"
            id="otp"
            maxLength={4}
            value={otp}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,4}$/.test(value)) setOtp(value);
            }}
            placeholder="4-digit code"
          />
        </div>

        <button
          type="submit"
          className="cursor-pointer w-full bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700"
        >
          Verify
        </button>

        <div className="text-center mt-4">
          {!canResend ? (
            <p className="text-sm text-[#1e1e1e]">
              Resend OTP in <span className="font-semibold">{resendTimer}s</span>
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResendOtp}
              className= "cursor-pointer text-sm font-bold text-indigo-600 hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default OtpVerification;
