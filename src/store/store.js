import { configureStore } from "@reduxjs/toolkit";

import dashboardReducer from "./dashboardSlice";
import menuReducer from "./menuSlice";
import headerReducer from "./headerSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    menu: menuReducer,
    header: headerReducer,
    auth: authSlice,
  },
});
