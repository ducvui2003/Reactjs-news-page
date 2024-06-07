import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types/user.type";
import {addUser, getUser, removeUser} from "../../services/sessionStorageService";
import {get} from "../../services/userServices";

const initialState: User = {
    email: getUser()?.email,
    password: getUser()?.password,
};

const authenticateSlice = createSlice({
    name: 'authenticate',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            console.log(user)
            const userInDB = get(user.email);
            if (userInDB != undefined && userInDB.password == user.password) {
                state.email = user.email;
                state.password = user.password;
                addUser(user);
            }
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