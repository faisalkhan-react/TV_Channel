// src/redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import modalSlice from "./Global_modal.js";
import uploadReducer from "./uploadSlice";
import authReducer from "./auth/authSl";
import dashboardReducer from "./admin/actions/dashboard/dashboardSlice.jsx";
import adminAuthSlice from "./auth/adminAuthSlice.js";

const adminPersistConfig = {
  key: "admin",
  storage,
};

const userPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  modal: modalSlice,
  upload: uploadReducer,
  auth: persistReducer(userPersistConfig, authReducer),
  admin: persistReducer(adminPersistConfig, adminAuthSlice),
  dashboard: dashboardReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
