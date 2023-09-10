import { createSlice } from "@reduxjs/toolkit";

//state of the login and signup

const logSlice = createSlice({
  name: "log",
  initialState: { isLoggedIn: false },
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const loginActions = logSlice.actions;
export default logSlice.reducer;
