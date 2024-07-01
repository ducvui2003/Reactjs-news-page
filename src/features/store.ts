import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './authenticate/authenticate.slice';
import newsReducer from './thenews/news.slice';
// import commentsReducer from './Comment/comment.slice';

export const store = configureStore({
  reducer: {
    authenticate: authenticateReducer,
    news: newsReducer,
    // comments: commentsReducer
  },
});

// Lấy RootState và AppDispatch từ Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
