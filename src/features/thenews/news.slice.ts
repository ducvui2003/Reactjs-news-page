import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  getNews,
  removeNews,
  saveNews,
} from '../../services/sessionStorageService';

const initial: string[] = getNews();

const newsSlice = createSlice({
  name: 'news',
  initialState: initial,
  reducers: {
    save: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (!state.includes(id)) {
        state.push(id);
        saveNews(id);
      }
    },
    unsave: (state, action: PayloadAction<string>) => {
      const idsave = action.payload;
      const index = state.indexOf(idsave);
      if (index !== -1) {
        state.splice(index, 1);
        removeNews(idsave);
      }
    },
  },
});

export const { save, unsave } = newsSlice.actions;
const newsReducer = newsSlice.reducer;
export default newsReducer;
