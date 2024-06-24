import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initial: string[] = [];

const newsSlice = createSlice({
  name: 'news',
  initialState: initial,
  reducers: {
    save: (state, action: PayloadAction<string>) => {
      // const id = action.payload;
      // if (state.includes(id)) return;
      // state.push(id);
      const id = action.payload;
      if (!state.includes(id)) {
        state.push(id);
      }
    },
    unsave: (state, action: PayloadAction<string>) => {
      // const idsave = action.payload;
      // const arr = state.filter((id) => id !== idsave);
      // state = arr;
      const idsave = action.payload;
      const index = state.indexOf(idsave);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { save, unsave } = newsSlice.actions;
const newsReducer = newsSlice.reducer;
export default newsReducer;
