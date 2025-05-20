import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
// import Signup from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import OtpVerification from "./pages/OtpVerification.jsx";
import Profile from "./pages/Profile.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions .jsx";
import Subscribe from "./pages/Subscribe.jsx";
import RefundAndCancellationPolicy from "./pages/RefundAndCancellationPolicy.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminUpload from "./components/AdminUpload.jsx";
import ProtectRoute from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
      <div className="App relative">
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
