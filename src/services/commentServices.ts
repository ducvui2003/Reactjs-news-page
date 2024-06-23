import { Comment } from '../types/comment.type';
import { commentData } from '../data/commentData';
import { v4 as uuidv4 } from 'uuid';

const getListComment = (): Comment[] => {
    return commentData;
};

const addComment = (comment: Comment) => {
    comment.id = uuidv4();
    getListComment().push(comment);
}

const getCommentListByNewsId = (newsId: string): Comment[] => {
    return getListComment().filter((comment: Comment) => comment.newsId == newsId);
}

const removeComment = (id: string) => {
    const newDataComment = getListComment().find((item: Comment): Comment => item.id == id);
    if (newDataComment) commentData.slice(newDataComment.id, 1);
}


export { addComment, getCommentListByNewsId, removeComment };