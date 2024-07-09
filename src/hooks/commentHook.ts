import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Comment } from '../types/comment.type';
import {
    COMMENTS_STORAGE_KEY,
    saveToLocalStorage,
    getFromLocalStorage,
} from '../services/storage/localStorageService';
import { getListComment, getCommentListByUserId } from '../services/commentServices';

interface CommentContextProps {
    comments: Comment[];
    addComment: (comment: Comment) => void;
    removeComment: (id: string) => void;
    editComment: (comment: Comment) => void;
    getCommentsByUserId: (userId: string) => Comment[];
}

const CommentContext = createContext<CommentContextProps | undefined>(undefined);

interface CommentProviderProps {
    children: ReactNode;
}

export const CommentProvider: React.FC<CommentProviderProps> = ({ children }) => {
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

    const getCommentsByUserId = (userId: string): Comment[] => {
        return getCommentListByUserId(userId);
    };

    return React.createElement(
        CommentContext.Provider,
        { value: { comments, addComment, removeComment, editComment, getCommentsByUserId } },
        children
    );
};

export const useComments = () => {
    const context = useContext(CommentContext);
    if (context === undefined) {
        throw new Error('useComments must be used within a CommentProvider');
    }
    return context;
};