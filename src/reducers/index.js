import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slicers/user.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
