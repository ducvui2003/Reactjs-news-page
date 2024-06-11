import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user.type";
import {
  addUser,
  getUser,
  removeUser,
} from "../../services/sessionStorageService";
import { get } from "../../services/userServices";

const userStorage = getUser();
const initialState: User = {
  email: userStorage?.email,
  password: userStorage?.password,
};

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState: initialState,
  reducers: {
    save: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.email = user.email;
      state.password = user.password;
      addUser(user);
    },
    exit: (state) => {
      state.email = undefined;
      state.password = undefined;
      removeUser();
    },
  },
});

export const { save, exit } = authenticateSlice.actions;
const authenticateReducer = authenticateSlice.reducer;
export default authenticateReducer;
