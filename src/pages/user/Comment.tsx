import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { getCommentListByUserId } from '../../services/commentServices';
import { CommentProvider } from '../../hooks/commentHook';
import CommentItem from '../../components/Comment/CommentItem';
import { Comment } from '../../types/comment.type';
import { Box, CardContent } from '@mui/material';
import Empty from '../../components/Empty/Empty';

function Comment() {
    const userId = useSelector((state: RootState) => state.authenticate.id);
    const [userComments, setUserComments] = useState<Comment[]>([]);

    useEffect(() => {
        document.title = 'Bình luận';
    }, []);

    useEffect(() => {
        const comments = getCommentListByUserId(userId);
        setUserComments(comments);
    }, [userId]);

    const handleDeleteComment = (commentId: string) => {
        setUserComments((prevComments) =>
            prevComments.filter((comment) => comment.id !== commentId),
        );
    };
    const handleUpdateComment = (comment: Comment) => {
        setUserComments((prevComments) =>
            prevComments.map((item) => (item.id === comment.id ? comment : item)),
        );
    };

    return (
        <Box>
            {userComments.length === 0 ? (
                <Empty />
            ) : (
                <div>
                    {userComments.map((comment) => (
                        <CardContent key={comment.id}>
                            <CommentProvider>
                                <CommentItem
                                    comment={comment}
                                    onDelete={handleDeleteComment}
                                    onUpdate={handleUpdateComment}
                                />
                            </CommentProvider>
                        </CardContent>
                    ))}
                </div>
            )}
        </Box>
    );
}

export default Comment;
