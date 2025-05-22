// src/redux/uploadSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../constants/constant";

// Async thunk to upload media
export const uploadMovie = createAsyncThunk(
  "upload/uploadMovie",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        `${BASE_URL}/api/admin/movies/`,
        formData,
        config
      ); // Replace with your actual API endpoint
      console.log(response.data);
    //   return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    loading: false,
    success: false,
    error: null,
    uploadedData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadMovie.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(uploadMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.uploadedData = action.payload;
      })
      .addCase(uploadMovie.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default uploadSlice.reducer;
