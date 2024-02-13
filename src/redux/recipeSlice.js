import { createSlice } from "@reduxjs/toolkit";
import { getMyRecipes } from "./user/userOperations";

const initialState = {
  recipes: [],
  error: null,
  isLoading: false,
};

export const recipesSlice = createSlice({
  name: "recipe",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(getMyRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyRecipes.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.recipes = payload;
      }),
});

export const recipeReducer = recipesSlice.reducer;
