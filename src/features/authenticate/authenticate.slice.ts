import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types/user.type";
import {addUser, getUser, removeUser} from "../../services/sessionStorageService";
import {get} from "../../services/userServices";

const initialState: User = {
    email: undefined,
    password: undefined,
};

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            const userExist = get(user.email);
            if (!userExist) return;
            state.email = user.email;
            state.password = user.password;
            addUser(user);
        },

        logout: (state) => {
            state.email = undefined;
            state.password = undefined;
            removeUser(state);
        }
    }
});


export const {login, logout} = authenticateSlice.actions
const authenticateReducer = authenticateSlice.reducer;
export default authenticateReducer;