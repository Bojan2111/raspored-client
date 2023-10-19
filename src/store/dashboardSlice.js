import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    menues: [],
    menuOptions: [],
  },
  reducers: {
    setMenuData: (state, action) => {
      state.menues = action.payload.menues;
      state.menuOptions = action.payload.menuOptions;
    },
  },
});

export const { setMenuData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
