import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../types/user.type";
import {userData} from "./UserData";

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
                add(user);
            }
        },
        register: (state, action: PayloadAction<User>) => {
            const user = action.payload;
            const userExist = userData.find((item: User) => user.email == item.email);
            if (userExist == undefined){
                userData.push(user);
            }
        },
        logout: (state) => {
            state.email = undefined;
            state.password = undefined;
            remove();
        }
    }
});

// Thêm user
function add(user: User) {
    remove();
    localStorage.setItem("user", JSON.stringify(user));
}

function remove() {
    localStorage.removeItem("user");
}

export const {login, logout} = authenticateSlice.actions
const authenticateReducer = authenticateSlice.reducer;
export default authenticateReducer;