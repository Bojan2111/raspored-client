import { configureStore } from "@reduxjs/toolkit";
import featureSlice from "./featureSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    feature: featureSlice,
    auth: authSlice,
  },
});
