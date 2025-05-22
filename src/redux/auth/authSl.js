import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/config";

// Send OTP
export const sendOtp = createAsyncThunk("sendOtp", async (phoneNumber) => {
  console.log(phoneNumber);
  const res = await api.post("/api/user/send-otp", { phoneNumber });
  console.log(res);
  return res.data; // assuming Axios
});

// Verify OTP
export const verifyOtp = createAsyncThunk(
  "verifyOtp",
  async ({ phoneNumber, otp }) => {
    const res = await api.post("/api/user/verify-otp", { phoneNumber, otp });
    return res.data; // token, message, success
  }
);

// Slice
const otpSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    otpSent: false,
    verified: false,
    data: null, // holds token, message, success
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sendOtp
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

      // verifyOtp
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.verified = true;
        state.data = action.payload; // contains token, message, success
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default otpSlice.reducer;
