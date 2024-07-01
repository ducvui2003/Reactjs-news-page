import { configureStore } from '@reduxjs/toolkit';
import authenticateReducer from './authenticate/authenticate.slice';
import newsReducer from './thenews/news.slice';

export const store = configureStore({
  reducer: {
    authenticate: authenticateReducer,
    news: newsReducer
  },
});

// Lấy RootState và AppDispatch từ Store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
