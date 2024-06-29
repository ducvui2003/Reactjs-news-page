import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { RootState } from '../../features/store';
import CommentItem from './CommentItem';

interface CommentListProps {
    newsId: string;
}

const CommentList: React.FC<CommentListProps> = ({ newsId }) => {
    const comments = useSelector((state: RootState) => state.comments.filter(comment => comment.newsId === newsId));

    return (
        <Box mt={4}>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </Box>
    );
};

export default CommentList;
