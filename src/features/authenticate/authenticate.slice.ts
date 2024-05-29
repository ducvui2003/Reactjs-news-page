import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types/user.type";
import {userData} from "./UserData";
import {addUser, removeUser} from "../../services/sessionStorageService";
import bcrypt from 'bcryptjs'

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
            const userExist = userData.find((item: User) => user.email == item.email);
            if (userExist) {
                state.email = user.email;
                state.password = user.password;
                addUser(user);
            }
        },
        register: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            const userExist = userData.find((item: User) => user.email == item.email);
            if (userExist == undefined) {
                userData.push(user);
            }
            addUser(user);
        },
        logout: (state) => {
            state.email = undefined;
            state.password = undefined;
            removeUser();
        }
    }
});


export const {login, logout} = authenticateSlice.actions
const authenticateReducer = authenticateSlice.reducer;
export default authenticateReducer;