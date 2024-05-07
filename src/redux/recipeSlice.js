import { createSlice } from "@reduxjs/toolkit";
import { getMyRecipes } from "./user/userOperations";

const initialState = {
  allRecipes: [],
  recipes: [],
  error: null,
  isLoading: false,
  engredients: JSON.parse(localStorage.getItem("ingredients")) || [],
};

export const recipesSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      state.engredients.push(action.payload);
      localStorage.setItem("ingredients", JSON.stringify(state.engredients));
    },
    removeIngredient: (state, action) => {
      state.engredients = state.engredients.filter(
        (ingredient) => ingredient !== action.payload
      );
    },
    clearIngredients: (state) => {
      state.engredients = [];
    },
    setAllRecipes: (state, action) => {
      state.allRecipes = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMyRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyRecipes.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.recipes = payload?.data;
      }),
});

export const {
  addIngredient,
  removeIngredient,
  clearIngredients,
  setAllRecipes,
} = recipesSlice.actions;
export const recipeReducer = recipesSlice.reducer;
