import axios from "axios";
import { BASE_URL } from "../constants/constant.js";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    let token = null;

    try {
      const persistedUser = localStorage.getItem("persist:auth");
      if (persistedUser) {
        const parsed = JSON.parse(persistedUser);
        const user = JSON.parse(parsed.user);
        token = user?.token;
      }

      if (!token) {
        const persistedAdmin = localStorage.getItem("persist:admin");
        if (persistedAdmin) {
          const parsed = JSON.parse(persistedAdmin);
          const admin = JSON.parse(parsed.admin);
          token = admin?.token;
        }
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (err) {
      console.error("Failed to parse token from redux-persist", err);
    }

    return config;
  },
  (error) => Promise.reject(error)
);
