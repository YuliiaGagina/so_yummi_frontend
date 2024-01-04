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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecipesQuery } = recipeApi;
