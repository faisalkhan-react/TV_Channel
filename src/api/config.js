import axios from "axios"

const BASE_URL = "https://tv-server-1.onrender.com"

export const api = axios.create({
    baseURL: BASE_URL,
})