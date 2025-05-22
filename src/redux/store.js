// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import modalSlice from "./Global_modal.js";
import uploadReducer from './uploadSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalSlice,
    upload: uploadReducer,
  },
});

export default store;
