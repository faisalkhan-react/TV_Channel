import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../api/config.js";

const initialState = {
  loading: false,
  error: null,
  data: null,
  success: false,
  message: null,
};

// Get Dashboard Data
export const getDashboardData = createAsyncThunk(
  "dashboard/getDashboardData",
  async () => {
    const res = await api.get("/api/admin/dashboard");
    console.log(res.data);
    return res.data;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    resetDashboardState: (state) => {
      state.loading = false;
      state.error = null;
      state.data = null;
      state.success = false;
      state.message = null;
    },
    setDashboardData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.data;
        state.success = action.payload.success;
        state.message = action.payload.message;
      })
      .addCase(getDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { resetDashboardState, setDashboardData } = dashboardSlice.actions;
export default dashboardSlice.reducer;
