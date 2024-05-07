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
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/register", credentials);

      console.log(data);
      return data;
    } catch (error) {
      if (!error.response) {
        // Якщо виникає помилка під час виконання запиту (наприклад, мережева помилка)
        return rejectWithValue(
          "Помилка мережі. Будь ласка, спробуйте через 1 хвилину."
        );
      } else if (
        error.response.status === 400 ||
        error.response.status === 500
      ) {
        // Якщо сервер повертає статус 400 або 500 (наприклад, невірні дані)
        return rejectWithValue(
          "Пароль має бути більше 6 символів і пошта в правильному форматі"
        );
      } else {
        // Якщо інші типи помилок
        return rejectWithValue(
          "Виникла невідома помилка. Будь ласка, спробуйте пізніше."
        );
      }
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", credentials);
      console.log(data);
      await token.set(data.accessToken);

      return data;
    } catch (error) {
      if (!error.response) {
        // Якщо виникає помилка під час виконання запиту (наприклад, мережева помилка)
        return rejectWithValue(
          "Помилка мережі. Будь ласка, спробуйте пізніше."
        );
      } else if (
        error.response.status === 400 ||
        error.response.status === 500
      ) {
        // Якщо сервер повертає статус 400 або 500 (наприклад, невірні дані)
        return rejectWithValue(
          "Неправильний логін або пароль. Будь ласка, спробуйте ще раз."
        );
      } else {
        // Якщо інші типи помилок
        return rejectWithValue(
          "Виникла невідома помилка. Будь ласка, спробуйте пізніше."
        );
      }
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (_, thunkApi) => {
  try {
    await axios.get("/api/auth/logout");
    token.unset();
  } catch (err) {}
});

// Authorization: "Bearer ";

export const refreshUser = createAsyncThunk("current/get", async (_, thunkApi) => {
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
});

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

export const addToFavorite = createAsyncThunk(
  "favorite/add",
  async ({ id, favorite }) => {
    try {
      const data = await axios.patch(`/api/recipes/${id}/favorite`, {
        favorite,
      });
      console.log(data);
      return data;
    } catch (err) {
      console.error("An error occurred while adding a recipe:", err);
    }
  }
);

// '/api/users/current'
