import React from 'react';
import { Avatar, Typography, Box, IconButton } from '@mui/material';
import { Comment } from '../../types/comment.type';
import { timeAgo } from '../../utils/timeUtils';
interface CommentItemProps {
    comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    return (
        <Box display="flex" alignItems="flex-start" my={2}>
            <Avatar alt={comment.user.email} src="https://via.placeholder.com/40" />
            <Box ml={2} flexGrow={1}>
                <Typography variant="subtitle2" color="primary">
                    {comment.user.email}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                    {comment.content}
                </Typography>
                <Box display="flex" alignItems="start" mt={1}>
                    <Typography variant="caption" color="textSecondary">
                        {timeAgo(comment.createAt)}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CommentItem;
