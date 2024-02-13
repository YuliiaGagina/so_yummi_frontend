import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const recipeApi = createApi({
  reducerPath: "resipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://odd-rose-fossa-fez.cyclic.app/",
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      query: () => `api/recipes`,
    }),
  }),
});

export const { useGetRecipesQuery } = recipeApi;

// getAllRecipeForUser: builder.query({
//     query: () => `api/recipes/myrecipes`,
//   }),

//  useGetAllRecipeForUserQuery;
