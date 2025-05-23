import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSl.js";
import Homepage from "../pages/user/Homepage.jsx";

const ProtectRoute = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    const accessToken = user?.token;

    if (!accessToken) {
      dispatch(logout());
    } else {
      const decodedToken = jwtDecode(accessToken);
      if (decodedToken.exp < Date.now() / 1000) {
        alert("Session expired. Please log in again.");
        dispatch(logout());
      }
    }
  }, [location]);

  if (user?.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectRoute;
