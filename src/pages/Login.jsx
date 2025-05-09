import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./SignUp.css";
// import { login } from "../redux/Auth/Action";
// import { useDispatch } from "react-redux";

const Signup = () => {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  return (
    <div className="sign_container">
      <div className="sign_form">
        <form>
          <h4 className="text-black-700 text-xl font-bold flex justify-center p-4">
            Login
          </h4>
          <hr />

          <div className="form_data mt-2">
            <label className="mb-4" htmlFor="tel">Mobile Number</label>
            <input
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

          {/* <div className="form_data">
            <label htmlFor="password">OTP</label>
            <input
              type="password"
              name="password"
              onChange={adddata}
              value={formData.password}
              id="password"
            />
          </div> */}

          <button type="submit" className="signin_btn mb-2">
            Send log-in code
          </button>
          {/*   
            <div className="signin_info">
              <p>Don't have an account?</p>
              <NavLink to="/signup">Signup</NavLink>
            </div> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
