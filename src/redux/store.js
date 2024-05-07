import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/userSlice";
import { recipeReducer } from "./recipeSlice";
import { recipeApi } from "./recipeApi";
import { filterReducer } from "./filterSlice";

const persistConfig = {
  key: "user",
  version: 1,
  storage,
  whitelist: ["token", "engredients"],
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    recipe: recipeReducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(recipeApi.middleware),
});

export const persistor = persistStore(store);
