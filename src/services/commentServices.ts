import { Comment } from '../types/comment.type';
import { commentData } from '../data/commentData';
import { getFromLocalStorage } from './localStorage/localStorageService';
import { COMMENTS_STORAGE_KEY } from './localStorage/localStorageService';

const getListComment = (): Comment[] => {
    const commentsFromLocalStorage = getFromLocalStorage<Comment[]>(COMMENTS_STORAGE_KEY);
    if (commentsFromLocalStorage !== null) {
        return commentsFromLocalStorage;
    }
    return commentData;
};

const getCommentListByUserId = (userId: string): Comment[] => {
    return getListComment().filter((comment: Comment) => comment.user.id === userId);
}


export { getCommentListByUserId, getListComment };
