import {configureStore} from '@reduxjs/toolkit';
import authenticateReducer from "./authenticate/authenticate.slice";

export const store = configureStore({
    reducer: {
        authenticate: authenticateReducer,
    }
})

// Lấy RootState và AppDispatch từ Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;