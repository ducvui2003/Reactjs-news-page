import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types/comment.type';
import { addComment, getCommentListByNewsId, removeComment, getListComment } from '../../services/commentServices';
import { COMMENTS_STORAGE_KEY, saveToLocalStorage, getFromLocalStorage } from '../../services/localStorageService';

const loadInitialState = (): Comment[] => {
    const savedComments = getFromLocalStorage<Comment[]>(COMMENTS_STORAGE_KEY);
    return savedComments || getListComment();
};

const initialState: Comment[] = loadInitialState();

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Comment>) => {
            const newComment = action.payload;
            addComment(newComment);
            state.push(newComment);
            saveToLocalStorage(COMMENTS_STORAGE_KEY, state);
        },
        remove: (state, action: PayloadAction<string>) => {
            const commentId = action.payload;
            removeComment(commentId);
            const updatedState = state.filter((comment) => comment.id !== commentId);
            saveToLocalStorage(COMMENTS_STORAGE_KEY, updatedState);
            return updatedState;
        },
        getListByNewsId: (state, action: PayloadAction<string>) => {
            const newsId = action.payload;
            return getCommentListByNewsId(newsId);
        },
    },
});

export const { add, remove, getListByNewsId } = commentsSlice.actions;
const commentsReducer = commentsSlice.reducer;
export default commentsReducer;
