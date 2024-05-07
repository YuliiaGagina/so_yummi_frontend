import { createSelector } from "@reduxjs/toolkit";

export const getAlRecipes = (state) => state.recipe.allRecipes;

export const getFilter = (state) => state.filter.value;
console.log(getFilter);

export const getFilteredRecipes = createSelector(
  [getAlRecipes, getFilter],

  (recipes, filter) => {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
