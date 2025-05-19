import axios from "axios";

const token = localStorage.getItem("token");
const BASE_URL = "https://tv-server-1.onrender.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
