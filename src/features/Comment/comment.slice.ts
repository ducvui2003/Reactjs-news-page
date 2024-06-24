import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment } from '../../types/comment.type';
import {
    addComment,
    getCommentListByNewsId,
    removeComment
} from '../../services/commentServices'; // Adjust path as needed
// Initial state for comments
// const commentStorage = getListComment();
const initialState: Comment[] = [];

// Create a slice for managing comments
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Comment>) => {
            const newComment = action.payload;
            addComment(newComment); // Add comment using the service function
            state.push(newComment); // Add comment to the state
        },
        remove: (state, action: PayloadAction<string>) => {
            const commentId = action.payload;
            removeComment(commentId); // Remove comment using the service function
            return state.filter((comment) => comment.id !== commentId); // Remove comment from the state
        },
        getListByNewsId: (state, action: PayloadAction<string>) => {
            const newsId = action.payload;
            return getCommentListByNewsId(newsId); // Get comments by newsId using the service function
        }
    },
});

export const { add, remove, getListByNewsId } = commentsSlice.actions;
const commentsReducer = commentsSlice.reducer;
export default commentsReducer;
