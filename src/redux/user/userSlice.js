import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, refreshUser } from "./userOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: "",
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
        state.error = "";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.loading = false;
        state.isLoggedIn = true;
        state.error = "";
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = true;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(login.pending, (state, { payload }) => {
        state.loading = true;

        state.error = "";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log(payload);
        if (payload?.user) {
          state.user = { email: payload.user.email, name: payload.user.name };

          state.token = payload.accessToken;
          state.isLoggedIn = true;
          state.error = "";
        } else {
        }
        state.loading = false;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.error = payload;

        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isRefreshUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload?.data.user;
        // state.isLoggedIn = true;
        state.isRefreshUser = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshUser = false;
      }),
});

export const userReducer = userSlice.reducer;
