import { api } from "./config.js";

// get a video
export const LoginApi = async () => {
  try {
    const response = await api.post("/api/user/send-otp", loginData);
    return response;
  } catch (error) {
    console.log("unable to login: ", error);
  }
};
