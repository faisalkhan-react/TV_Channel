import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar.jsx";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./component/footer/Footer.jsx";
// import Signup from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx"
import OtpVerification from "./pages/OtpVerification.jsx";
import Profile from "./pages/Profile.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/verify-otp" element={<OtpVerification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path ="/admin" element={<AdminPanel />} />
          <Route path ="/profile" element={<Profile/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
