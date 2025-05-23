// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./Global_modal.js";
import uploadReducer from "./uploadSlice";
import authReducer from "./auth/authSl";
import dashboardReducer from "./admin/actions/dashboard/dashboardSlice.jsx";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    upload: uploadReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
