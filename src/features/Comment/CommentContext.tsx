import React, { createContext, useContext, useState } from 'react';
import { Comment } from '../../types/comment.type';
import {
    addComment,
    getCommentListByNewsId,
    removeComment,
    getListComment,
} from '../../services/commentServices';
import {
    COMMENTS_STORAGE_KEY,
    saveToLocalStorage,
    getFromLocalStorage,
} from '../../services/localStorage/localStorageService';

interface CommentContextProps {
    comments: Comment[];
    addComment: (comment: Comment) => void;
    removeComment: (id: string) => void;
    editComment: (comment: Comment) => void;
}

const CommentContext = createContext<CommentContextProps | undefined>(undefined);

export const CommentProvider: React.FC = ({ children }) => {
    const [comments, setComments] = useState<Comment[]>(() => {
        const savedComments = getFromLocalStorage<Comment[]>(COMMENTS_STORAGE_KEY);
        return savedComments || getListComment();
    });

    const addComment = (newComment: Comment) => {
        setComments((prevComments) => {
            const updatedComments = [...prevComments, newComment];
            saveToLocalStorage(COMMENTS_STORAGE_KEY, updatedComments);
            return updatedComments;
        });
    };

    const removeComment = (id: string) => {
        setComments((prevComments) => {
            const updatedComments = prevComments.filter((comment) => comment.id !== id);
            saveToLocalStorage(COMMENTS_STORAGE_KEY, updatedComments);
            return updatedComments;
        });
    };

    const editComment = (editedComment: Comment) => {
        setComments((prevComments) => {
            const updatedComments = prevComments.map((comment) =>
                comment.id === editedComment.id ? editedComment : comment
            );
            saveToLocalStorage(COMMENTS_STORAGE_KEY, updatedComments);
            return updatedComments;
        });
    };

    return (
        <CommentContext.Provider value={{ comments, addComment, removeComment, editComment }}>
            {children}
        </CommentContext.Provider>
    );
};

export const useComments = () => {
    const context = useContext(CommentContext);
    if (context === undefined) {
        throw new Error('useComments must be used within a CommentProvider');
    }
    return context;
};