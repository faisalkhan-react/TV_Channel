import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Homepage from "./pages//user/Homepage.jsx";
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
import AdminLogin from "./pages//admin/AdminLogin.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/tnc" element={<TermsAndConditions/>}/>
          <Route path="/refund-and-cancellation" element={<RefundAndCancellationPolicy/>}/>
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path ="/admin" element={<AdminLogin />} />
          <Route path ="/admin/dashboard" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
