// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modalSlice from './Global_modal.js'

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalSlice
  },
});

export default store;
