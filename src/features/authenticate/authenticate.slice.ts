import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/user.type';
import { getUser, removeUser } from '../../services/sessionStorageService';

const userStorage = getUser();
const initialState: User = {
  id: userStorage?.id ?? '',
  email: userStorage?.email ?? '',
  password: userStorage?.password ?? '',
};

const authenticateSlice = createSlice({
  name: 'authenticate',
  initialState: initialState,
  reducers: {
    save: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.email = user.email;
      state.password = user.password;
    },
    exit: (state) => {
        removeUser(state.email);
        state.email = '';
        state.password = '';
    },
  },
});

export const { save, exit } = authenticateSlice.actions;
const authenticateReducer = authenticateSlice.reducer;
export default authenticateReducer;
