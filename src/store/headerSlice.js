import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    selectedOptionId: 1,
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOptionId = action.payload;
    },
  },
});

export const { setSelectedOption } = headerSlice.actions;

export default headerSlice.reducer;
