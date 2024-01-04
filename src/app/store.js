import { configureStore } from "@reduxjs/toolkit";
import { recipeApi } from "../redux/recipeApi";
import recipeSlice from "../redux/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeSlice,
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
});
