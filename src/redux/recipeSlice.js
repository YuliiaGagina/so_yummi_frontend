import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  error: null,
  loader: null,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default recipesSlice.reducer;
