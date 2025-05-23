import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/config";

// Send OTP
export const sendOtp = createAsyncThunk("sendOtp", async (phoneNumber) => {
  console.log(phoneNumber);
  const res = await api.post("/api/user/send-otp", phoneNumber); // fix: should be an object
  console.log(res);
  return res.data;
});

// Verify OTP
export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async ({ phoneNumber, otp }) => {
    const res = await api.post("/api/user/verify-otp", { phoneNumber, otp });
    console.log(res.data);
    return res.data;
  }
);

const otpSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    initialized: false,
    error: null,
    otpSent: false,
    verified: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.initialized = true;
    },
    // logout: (state) => {
    //   state.loading = false;
    //   state.error = null;
    //   state.otpSent = false;
    //   state.verified = false;
    //   state.user = null;
    //   localStorage.removeItem("user"); // Clear localStorage if token or user info is saved
    // },
    logoutUser: (state) => {
      state.user = null;
      state.initialized = true;
      localStorage.removeItem("persist:auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.verified = true;
        state.initialized = true;
        state.user = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.initialized = true;
      });
  },
});

export const { logoutUser, setUser } = otpSlice.actions;

export default otpSlice.reducer;
