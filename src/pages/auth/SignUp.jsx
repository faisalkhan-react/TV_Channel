// import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// import "./SignUp.css";

// const Signup = () => {
//     const [uData, setUdata] = useState({
//         fullName: "",
//         email: "",
//         mobile: "",
//         password: "",
//       });
//       //   console.log(uData);
    
//       const adddata = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         setUdata((prev) => {
//           return {
//             ...prev,
//             [name]: value,
//           };
//         });
//       };

//   return (
//     <div className="sign_container">
//       <div className="sign_form">
//         <form>
//           <h2 className="text-black-700 text-xl font-bold flex justify-center p-4">Create account</h2>
//           <hr />
//           <div className="form_data">
//             <label htmlFor="fullName">Your Name</label>
//             <input
//               type="text"
//               onChange={adddata}
//               value={uData.fullName}
//               name="fullName"
//               id="fullName"
//             />
//           </div>
//           <div className="form_data">
//             <label htmlFor="email">E-mail</label>
//             <input
//               type="email"
//               onChange={adddata}
//               value={uData.email}
//               name="email"
//               id="email"
//             />
//           </div>
//           <div className="form_data">
//             <label htmlFor="mobile">Mobile number</label>
//             <input
//               type="number"
//               onChange={adddata}
//               value={uData.mobile}
//               name="mobile"
//               id="mobile"
//             />
//           </div>
//           <div className="form_data">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               onChange={adddata}
//               value={uData.password}
//               id="password"
//               placeholder="At least 6 characters"
//             />
//           </div>
//           <button type="submit" className="signin_btn ">
//             Continue
//           </button>
//           <hr />

//           <div className="signin_info">
//             <p>Already have an account?</p>
//             <NavLink to="/login">Sign in</NavLink>
//           </div>
//         </form>
//       </div>
      
//     </div>
//   );
// };

// export default Signup;