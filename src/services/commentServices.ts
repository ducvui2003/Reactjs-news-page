import { Comment } from '../types/comment.type';
import { commentData } from '../data/commentData';
import {
    COMMENTS_STORAGE_KEY,
    saveToLocalStorage,
    getFromLocalStorage,
} from './localStorage/localStorageService';


const getListComment = (): Comment[] => {
    const commentsFromLocalStorage = getFromLocalStorage<Comment[]>(COMMENTS_STORAGE_KEY);
    if (commentsFromLocalStorage === null) {
        saveToLocalStorage(COMMENTS_STORAGE_KEY, commentData);
        return commentData;
    }else {
     return commentsFromLocalStorage; // Đã convert từ JSON sang object
    }
};

const getCommentListByUserId = (userId: string): Comment[] => {
    return getListComment().filter((comment: Comment) => comment.userId === userId);
}

export { getCommentListByUserId, getListComment };
