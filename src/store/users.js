import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    dateOfBirth: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { uName, fName, lName, email, birthDate, phone } = action.payload;
      state.username = uName;
      state.firstName = fName;
      state.lastName = lName;
      state.email = email;
      state.dateOfBirth = birthDate;
      state.phone = phone;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
