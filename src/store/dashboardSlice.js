import { createSlice } from "@reduxjs/toolkit";

import { menuOptions } from "../dummyOptions";

const menuesList = [];
const menuOptionsList = [];
const rcMenuesList = [];
const rcMenuOptionsList = [];

for (let key of Object.keys(menuOptions)) {
  if (!key.startsWith("RC")) {
    menuesList.push(key);
  } else {
    rcMenuesList.push(key.slice(2));
    rcMenuOptionsList.push(menuOptions[i]);
  }
}

const menuArr = [];
let valArr = [];
for (let [key, value] of Object.entries(menuOptions)) {
  let tempArr = value.map((v) => ({
    id: v.id,
    name: v.name,
    description: v.description,
  }));
  valArr = [...valArr, ...tempArr];
  menuArr.push(key);
}

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
