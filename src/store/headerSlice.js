import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    optionsList: ["Licni", "Timski", "Napravi novi"],
    selectedOptionId: 1,
  },
  reducers: {
    setSelectedOption: (state, action) => {
      state.selectedOptionId = action.payload;
    },
    setOptionsList: (state, action) => {
      state.optionsList = action.payload;
    },
  },
});

export const { setSelectedOption, setOptionsList } = headerSlice.actions;

export default headerSlice.reducer;
