import { createSlice } from "@reduxjs/toolkit";

import { featuresList } from "../features";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    menues: [],
    menuOptions: [],
    contextMenuOptions: [],
  },
  reducers: {
    setMenuData: (state, action) => {
      state.menues = action.payload.menues;
      state.menuOptions = action.payload.menuOptions;
      state.contextMenuOptions = action.payload.contextMenuOptions;
    },
  },
});

export const { setMenuData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
