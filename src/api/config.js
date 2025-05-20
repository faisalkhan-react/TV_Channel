import axios from "axios";
import { BASE_URL } from "../constants/constant.js";

const user = localStorage.getItem("user");
const token = user ? JSON.parse(user).token : null;
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
