// import React, { useEffect, useState } from "react";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
// import { useDispatch } from "react-redux";
// // import { logout } from "./Redux/actions/auth";
// const ProtectedRoute = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

//   useEffect(() => {
//     const accessToken = user?.accessToken;

//     if (!accessToken) {
//       dispatch(logout(navigate, navigate));
//     } else {
//       const decodedToken = jwtDecode(accessToken);
//       if (decodedToken.exp < Date.now() / 1000) {
//         dispatch(logout(navigate, navigate));
//       }
//     }
//   }, [location]);

//   return user?.accessToken ? <Outlet /> : <Navigate to="/auth/login" replace />;
// }

// export default ProtectedRoute
