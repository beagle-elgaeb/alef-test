import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "./types";

const initialState = {
  name: "",
  age: "",
  children: [],
};

export const personSlice = createSlice({
  name: "person",
  initialState: initialState as StateType,
  reducers: {
    input: (
      state,
      { payload }: PayloadAction<{ field: "name" | "age"; value: string }>
    ) => {
      state[payload.field] = payload.value;
    },
    addChild: (state) => {
      state.children.push({ name: "", age: "" });
    },
    deleteChild: (state, { payload }) => {
      state.children.splice(payload, 1);
    },
    inputChild: (
      state,
      {
        payload,
      }: PayloadAction<{ field: "name" | "age"; value: string; index: number }>
    ) => {
      state.children[payload.index][payload.field] = payload.value;
    },
  },
});

export const { input, addChild, deleteChild, inputChild } = personSlice.actions;

export default personSlice.reducer;
