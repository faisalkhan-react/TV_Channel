import Login from "../pages/auth/Login.jsx";
import { api } from "./config.js";

// get user data
export const LoginApi = async () => {
  try {
    const response = await api.post("/api/user/send-otp", loginData);
    return response.data;
  } catch (error) {
    console.log("unable to login: ", error);
  }
};
