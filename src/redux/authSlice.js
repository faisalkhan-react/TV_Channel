// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  phoneNumber: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.phoneNumber = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.phoneNumber = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
