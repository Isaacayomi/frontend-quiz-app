import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      state.toggle = action.payload;
    },
  },
});

export const { toggleTheme } = toggleSlice.actions;

export default toggleSlice.reducer;
