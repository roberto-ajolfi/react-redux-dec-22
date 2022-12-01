import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import themeReducer from "./themeSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger)
});

export type AppStateToolkit = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
