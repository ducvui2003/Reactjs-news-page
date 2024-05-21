import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Theme {
    theme: string,
    textColor: string
}

const initialState: Theme = {
    theme : "light",
    textColor: "black"
};


const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState: initialState,
    reducers: {
        swapTheme: (state, action: PayloadAction<Theme>) => {
            const theme = action.payload;
            state = theme;
        }
    }
});


export const {swapTheme} = darkmodeSlice.actions
const darkModeReducer = darkmodeSlice.reducer;
export default darkModeReducer;