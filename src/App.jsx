import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Homepage from "./pages/user/Homepage.jsx";
import About from "./pages/user/About.jsx";
import Contact from "./pages/user/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
// import Signup from "./pages/SignUp.jsx";
import Login from "./pages/auth/Login.jsx";
import OtpVerification from "./pages/auth/OtpVerification.jsx";
import Profile from "./pages/Profile.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import PrivacyPolicy from "./pages/user/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/user/TermsAndConditions .jsx";
import Subscribe from "./pages/Subscribe.jsx";
import RefundAndCancellationPolicy from "./pages/user/RefundAndCancellationPolicy.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
// import ProtectRoute from "./components/ProtectedRoute.jsx";
import AdminUpload from "./pages/admin/components/AdminMovieUpload.jsx";
import AdminMovies from "./pages/admin/AdminMovies.jsx";
import AdminSeries from "./pages/admin/AdminSeries.jsx";
import AdminUsers from "./pages/admin/AdminUsers.jsx";
import AdminSeriesUpload from "./pages/admin/components/AdminSeriesUpload.jsx";
import VideoPlayer from "./pages/user/VideoPlayerPage.jsx";
import AdminShows from "./pages/admin/AdminShows.jsx";
import AdminShowsUpload from "./pages/admin/components/AdminShowsUpload.jsx";
import AdminAnlytics from "./pages/admin/AdminAnlytics.jsx";
import AdminVendor from "./pages/admin/AdminVendor.jsx";
import AdminMovieUpload from "./pages/admin/components/AdminMovieUpload.jsx";
import { setUser } from "./redux/auth/authSl.js";
import { useDispatch } from "react-redux";
import IsAdmin from "./components/isAdmin.jsx";
import UniversalRouteGuard from "./components/UniversalRouteGuard.jsx";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  const isAdminPanel = location.pathname.startsWith("/admin");
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    // const parsedUser = JSON.parse(user);
    dispatch(setUser(user));
  }

  return (
    <>
      {/* <ToastContainer position="top-right" autoClose={3000} />; */}
      <div className="App">
        {!isAdminPanel && <Navbar />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/adminupload" element={<AdminUpload />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tnc" element={<TermsAndConditions />} />
          <Route
            path="/refund-and-cancellation"
            element={<RefundAndCancellationPolicy />}
          />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/movie/:id"
            element={
              // <ProtectRoute>
              <VideoPlayer />
              // </ProtectRoute>
            }
          />

          <Route
            path="/login"
            element={
              // <ProtectRoute>
              <UniversalRouteGuard role="user" mode="public" redirectTo="/">
                <Login />
              </UniversalRouteGuard>

              //* </ProtectRoute> */}
            }
          />
          <Route
            path="/verify-otp"
            element={
              // <ProtectRoute>
              <OtpVerification />
              //* </ProtectRoute> */}
            }
          />

          {/*  Admin routes */}
          <Route
            path="/profile"
            element={
              // <ProtectRoute>
              <Profile />
              // </ProtectRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="public"
                redirectTo="/admin/dashboard"
              >
                <AdminLogin />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              // <IsAdmin>
              //   <AdminDashboard />
              // </IsAdmin>
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminDashboard />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/movies"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminMovies />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/movies/upload"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminMovieUpload />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/series"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminSeries />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/series/upload"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminSeriesUpload />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/shows"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminShows />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/shows/upload"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminShowsUpload />
              </UniversalRouteGuard>
            }
          />

          <Route
            path="/admin/analytics"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminAnlytics />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/vendor"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminVendor />
              </UniversalRouteGuard>
            }
          />
          <Route
            path="/admin/users"
            element={
              <UniversalRouteGuard
                role="admin"
                mode="private"
                redirectTo="/admin"
              >
                <AdminUsers />
              </UniversalRouteGuard>
            }
          />
        </Routes>
        {/* {!isAdminPanel && <Footer />} */}
      </div>
    </>
  );
}

export default App;
