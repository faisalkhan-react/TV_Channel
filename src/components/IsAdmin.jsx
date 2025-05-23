import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice.js";

const IsAdmin = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // Check admin and token validity
  useEffect(() => {
    if (user?.role === "admin") {
      const accessToken = user?.token;
      if (!accessToken) {
        dispatch(logout());
      } else {
        const decodedToken = jwtDecode(accessToken);
        if (decodedToken.exp < Date.now() / 1000) {
          dispatch(logout());
        }
      }
    }
  }, [location]);

  // If not admin, redirect to home
  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // if (user.role === "admin" || user.token) {
  //   return <Navigate to="/admin/dashboard" replace />;
  // }

  return children;
};

export default IsAdmin;
