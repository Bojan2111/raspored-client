import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const featureSlice = createSlice({
  name: "feature",
  initialState: {
    menu: null,
    features: [],
  },
  reducers: {
    setFeature: (state, action) => {
      const { menu, features } = action.payload;
      state.menu = menu;
      state.features = features;
    },
  },
});

export const { setFeature } = featureSlice.actions;

export default featureSlice.reducer;

export const selectCurrentMenu = (state) => state.featureSlice.menu;
export const selectCurrentFeatures = (state) => state.featureSlice.features;
