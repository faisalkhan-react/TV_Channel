import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    phone: "",
  });

  const adddata = (e) => {
    const { name, value } = e.target;
    setFormData(() => {
      return {
        ...formData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-[30%] border border-indigo-600 mt-10 mb-10 mx-auto flex flex-col items-center rounded-md p-6 ">
      <form onSubmit={handleSubmit} className="w-[65%]">
        <h4 className="text-black text-xl font-bold flex justify-center p-4">
          Login
        </h4>
        <hr className="mb-4" />

        <div className="flex flex-col justify-center mb-2">
          <label htmlFor="tel" className="text-sm font-bold mb-4">
            Mobile Number
          </label>
          <input
            className="w-full h-6 rounded border border-indigo-600 mt-1 mb-2 px-2 py-4"
            type="tel"
            name="phone"
            id="phone"
            maxLength={10}
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                setFormData({ ...formData, phone: value });
              }
            }}
            placeholder="Enter 10-digit number"
          />
        </div>

        {/* OTP input can be uncommented and used if needed */}
        {/* <div className="flex flex-col justify-center mb-4">
          <label htmlFor="password" className="text-sm font-bold mb-1">OTP</label>
          <input
            className="w-full h-6 rounded border border-indigo-600 mt-1 mb-2 px-2"
            type="password"
            name="password"
            onChange={adddata}
            value={formData.password}
            id="password"
          />
        </div> */}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-2 px-4 rounded mt-2 mb-4"
        >
          Get code
        </button>

        {/* Uncomment below to add signup info link */}
        {/* <div className="flex justify-around mb-2">
          <p className="text-sm font-semibold text-gray-800">
            Don&apos;t have an account?
          </p>
          <NavLink
            to="/signup"
            className="text-sm font-bold text-indigo-600 hover:underline ml-1"
          >
            Signup
          </NavLink>
        </div> */}
      </form>
    </div>
  );
};

export default Signup;
