import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Comment } from '../../types/comment.type';
import { timeAgo } from '../../utils/timeUtils';

interface CommentItemProps {
    comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    // Ensure createAt is a Date object
    const createAtDate = new Date(comment.createAt);

    return (
        <Box display="flex" alignItems="flex-start" my={2}>
            <Avatar alt={comment.user.email} src={undefined}>
                <AccountCircleIcon />
            </Avatar>
            <Box ml={2} flexGrow={1}>
                <Typography variant="subtitle2" color="primary">
                    {comment.user.email}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                    {comment.content}
                </Typography>
                <Box display="flex" alignItems="start" mt={1}>
                    <Typography variant="caption" color="textSecondary">
                        {timeAgo(createAtDate) + '  ' +  comment.createAt}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default CommentItem;
