import { Comment } from '../types/comment.type';
import { commentData } from '../data/commentData';
import { getFromLocalStorage } from './localStorage/localStorageService';
import { COMMENTS_STORAGE_KEY } from './localStorage/localStorageService';
import { v4 as uuidv4 } from 'uuid';

const getListComment = (): Comment[] => {
    const commentsFromLocalStorage = getFromLocalStorage<Comment[]>(COMMENTS_STORAGE_KEY);
    if (commentsFromLocalStorage !== null) {
        return commentsFromLocalStorage;
    }
    return commentData;
};

const addComment = (comment: Comment) => {
    comment.id = uuidv4();
    getListComment().push(comment);
};

const getCommentListByNewsId = (newsId: string): Comment[] => {
    return getListComment().filter((comment: Comment) => comment.newsId === newsId);
};

const getCommentListByUserId = (userId: string): Comment[] => {
    return getListComment().filter((comment: Comment) => comment.user.id === userId);
}

const getNewsIdsCommentedByUser = (userId: string): string[] => {
    const commentsByUser = getCommentListByUserId(userId);
    const newsIds = [...new Set(commentsByUser.map(comment => comment.newsId))];
    return newsIds;
};

const editComment = (comment: Comment) => {
    const index = commentData.findIndex((c) => c.id === comment.id);
    if (index !== -1) {
        commentData[index] = comment;
    }
}

const removeComment = (id: string) => {
    const index = commentData.findIndex((comment) => comment.id === id);
    if (index !== -1) {
        commentData.splice(index, 1);
    }
};

export { addComment, getCommentListByNewsId, getCommentListByUserId, getNewsIdsCommentedByUser, removeComment, getListComment, editComment };
