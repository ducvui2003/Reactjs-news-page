import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;
const dialogAuth = createSlice({
  name: "dialog/auth",
  initialState: initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { toggle } = dialogAuth.actions;
const dialogAuthReducer = dialogAuth.reducer;
export default dialogAuthReducer;
