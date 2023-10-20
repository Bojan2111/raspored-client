import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import authFetch from "../axios/custom";
import { selectCurrentToken } from "./authSlice";
import authSlice from "./authSlice";

const url = "https://localhost:44383/role-features";
const token = authSlice.token;

const initialState = {
  menues: [],
  menuOptions: [],
  isLoading: true,
};

export const getMenuOptions = createAsyncThunk(
  "dashboard/getMenuOptions",
  async (name, thunkAPI) => {
    try {
      const resp = await axios("/role-features", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setMenuData: (state, action) => {
      state.menues = action.payload.menues;
      state.menuOptions = action.payload.menuOptions;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMenuOptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenuOptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menuOptions = action.payload;
        state.menues = [...Object.keys(action.payload)];
      })
      .addCase(getMenuOptions.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setMenuData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
