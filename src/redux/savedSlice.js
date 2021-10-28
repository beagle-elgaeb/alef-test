import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    save: (state, action) => {
      return action.payload;
    },
  },
});

export const { save } = savedSlice.actions;

export default savedSlice.reducer;
