import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/config";

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (adminCredentials) => {
    const res = await api.post("/api/admin/admin-login", adminCredentials);
    console.log("Admin login response:", res.data);
    return res.data;
  }
);

const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    loading: false,
    initialized: false,
    admin: null,
    error: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
      state.initialized = true;
    },
    // logoutAdmin: (state) => {
    //   Object.assign(state, adminAuthSlice.getInitialState());
    //   localStorage.removeItem("admin");
    // },
    logoutAdmin: (state) => {
      state.admin = null;
      state.initialized = true;
      localStorage.removeItem("persist:admin");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        const { token, role } = action.payload;
        state.loading = false;
        state.admin = { token, role };
        state.initialized = true;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setAdmin, logoutAdmin } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
