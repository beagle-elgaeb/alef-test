import { createSlice } from "@reduxjs/toolkit";
import { ChildType, StateType } from "./types";

const initialState = null;

export const savedSlice = createSlice({
  name: "saved",
  initialState: initialState as StateType | null,
  reducers: {
    save: (_, { payload }) => {
      const newChildren = payload.children.filter(
        (child: ChildType) => child.name !== "" && child.age !== ""
      );

      return {
        ...payload,
        children: newChildren,
      };
    },
  },
});

export const { save } = savedSlice.actions;

export default savedSlice.reducer;
