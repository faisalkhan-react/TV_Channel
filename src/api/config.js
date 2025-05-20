import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";

const token = localStorage.getItem("token");
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
