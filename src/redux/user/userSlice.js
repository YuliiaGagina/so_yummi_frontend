import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, getCurrentUser } from "./userOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: false,
  loading: false,
  isRefreshUser: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.loading = false;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = true;
      })
      .addCase(login.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.user = { email: payload.data.email, name: payload.data.name };

        state.token = payload.data.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(getCurrentUser.pending, (state, { payload }) => {
        state.isRefreshUser = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload?.data.user;
        state.isLoggedIn = true;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isRefreshUser = false;
      }),
});

export const userReducer = userSlice.reducer;
