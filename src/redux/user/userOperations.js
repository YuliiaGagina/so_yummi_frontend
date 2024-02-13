import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001/";
// /api/auth/register
// process.env.REACT_APP_LOGIN;
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "user/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/register", credentials);

      console.log(data);
      return data;
    } catch (err) {}
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/login", credentials);
      token.set(data.data.token);

      return data;
    } catch (err) {}
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkApi) => {
  try {
    await axios.get("/api/auth/logout");
    token.unset();
  } catch (err) {}
});

// Authorization: "Bearer ";

export const getCurrentUser = createAsyncThunk(
  "current/get",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.user.token;
    if (token === null) {
      return;
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get("/api/users/current");
      //   if (!data) return;
      //   console.log(data.data.user);
      return data;
    } catch (err) {}
  }
);

export const getMyRecipes = createAsyncThunk("recipes/gatAll", async () => {
  try {
    const data = await axios.get("/api/recipes/myrecipes");
    if (!data) {
      return;
    }
    return data;
  } catch (err) {}
});

export const addRecipe = createAsyncThunk(
  "recipes/add",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/recipes", credentials);

      console.log(data);
      return data;
    } catch (err) {
      console.error("An error occurred while adding a recipe:", err);
    }
  }
);

// '/api/users/current'
