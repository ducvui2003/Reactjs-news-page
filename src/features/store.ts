import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './authenticate/authenticate.slice';
import darkModeReducer from './darkmode/darkmode.slice';
import commentsReducer from './Comment/comment.slice';
export const store = configureStore({
  reducer: {
    authenticate: authenticateReducer,
    darkMode: darkModeReducer,
    comments: commentsReducer,
  },
});

// Lấy RootState và AppDispatch từ Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
