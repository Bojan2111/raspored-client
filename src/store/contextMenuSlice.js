import { createSlice } from "@reduxjs/toolkit";

const contextMenuSlice = createSlice({
  name: "contextMenu",
  initialState: {
    selectedOptionId: 0,
    contextMenuOptions: null,
  },
});

export default contextMenuSlice.reducer;
