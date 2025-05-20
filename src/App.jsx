import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Homepage from "./pages/user/Homepage.jsx";
import About from "./pages/user/About.jsx";
import Contact from "./pages/user/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
// import Signup from "./pages/SignUp.jsx";
import Login from "./pages/auth/Login.jsx"
import OtpVerification from "./pages/auth/OtpVerification.jsx";
import Profile from "./pages/Profile.jsx";
import AdminPanel from "./pages/admin/AdminPanel.jsx";
import PrivacyPolicy from "./pages/user/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/user/TermsAndConditions .jsx";
import Subscribe from "./pages/Subscribe.jsx";
import RefundAndCancellationPolicy from "./pages/user/RefundAndCancellationPolicy.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import ProtectRoute from "./components/ProtectedRoute.jsx";
import AdminUpload from "./components/AdminUpload.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <AdminUpload />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              // <ProtectRoute>
                <Homepage />
              // </ProtectRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/tnc" element={<TermsAndConditions />} />
          <Route
            path="/refund-and-cancellation"
            element={<RefundAndCancellationPolicy />}
          />
          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<OtpVerification />} />

          {/*  Admin routes */}
          <Route
            path="/profile"
            element={
              <ProtectRoute>
                <Profile />
              </ProtectRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectRoute>
                <AdminLogin />
              </ProtectRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectRoute>
                <AdminPanel />
              </ProtectRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
