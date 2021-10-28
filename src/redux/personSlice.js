import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  children: [],
};

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    input: (state, action) => {
      state[action.payload.field] = action.payload.value;
      state.isSaved = false;
    },
    addChild: (state) => {
      state.children.push({ name: "", age: "" });
      state.isSaved = false;
    },
    deleteChild: (state, action) => {
      state.children.splice(action.payload, 1);
      state.isSaved = false;
    },
    inputChild: (state, action) => {
      state.children[action.payload.index][action.payload.field] =
        action.payload.value;
      state.isSaved = false;
    },
  },
});

export const { input, addChild, deleteChild, inputChild } = personSlice.actions;

export default personSlice.reducer;
