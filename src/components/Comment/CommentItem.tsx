import React, { useState } from 'react';
import {
    Avatar,
    Typography,
    Box,
    Paper,
    IconButton,
    TextField,
    Menu,
    MenuItem,
    Button,
    CircularProgress,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Comment } from '../../types/comment.type';
import { timeAgo } from '../../utils/timeUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { useComments } from '../../services/commentServices';

interface CommentItemProps {
    comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(comment.content);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const userId = useSelector((state: RootState) => state.authenticate.id);
    const { editComment, removeComment } = useComments();

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEditClick = () => {
        setIsEditing(true);
        handleMenuClose();
    };

    const handleSaveClick = async () => {
        setIsLoading(true);
        const updatedComment = { ...comment, content: editedComment };
        try {
            editComment(updatedComment);
            console.log('editComment>>>>>>>>>', updatedComment);
            setIsEditing(false);
        } catch (error) {
            console.error('Failed to edit comment:', error);
            // Optionally, add user feedback for failure
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteClick = async () => {
        setIsLoading(true);
        try {
            removeComment(comment.id);
        } catch (error) {
            console.error('Failed to delete comment:', error);
            // Optionally, add user feedback for failure
        } finally {
            setIsLoading(false);
        }
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedComment(event.target.value);
    };
    // Để tạm thời gian là ngày tháng vì dùng timeAgo đang bị lỗi không convert đúng định dạng được
    const createAtDate = new Date(comment.createAt).toDateString();
    // const convertToTimeAgo = timeAgo(createAtDate);

    return (
        <Paper elevation={2} sx={{ padding: 2, marginBottom: 2, position: 'relative' }}>
            <Box display="flex" alignItems="flex-start">
                <Avatar alt={comment.user.email} src={undefined} sx={{ marginRight: 2 }}>
                    <AccountCircleIcon />
                </Avatar>
                <Box flexGrow={1}>
                    <Typography variant="subtitle2" color="primary">
                        {comment.user.email}
                    </Typography>
                    {isEditing ? (
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={editedComment}
                            onChange={handleCommentChange}
                        />
                    ) : (
                        <Typography variant="body2" color="textPrimary" sx={{ marginTop: 1 }}>
                            {comment.content}
                        </Typography>
                    )}
                    <Box display="flex" alignItems="center" mt={1}>
                        <Typography variant="caption" color="textSecondary">
                            {createAtDate}
                        </Typography>
                    </Box>
                </Box>
                {userId === comment.user.id && (
                    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                        <IconButton
                            aria-label="more"
                            aria-controls="comment-menu"
                            aria-haspopup="true"
                            onClick={handleMenuClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="comment-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem onClick={handleEditClick} sx={{ minWidth: 120, fontSize: '1rem' }}>
                                <EditIcon fontSize="small" sx={{ marginRight: 1 }} />
                                <Typography sx={{ minWidth: 120 }}>Chỉnh sửa</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleDeleteClick} sx={{ minWidth: 120, fontSize: '1rem' }}>
                                <DeleteIcon fontSize="small" sx={{ marginRight: 1 }} />
                                <Typography sx={{ minWidth: 120 }}>Xóa</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                )}
            </Box>
            {isLoading && (
                <Box display="flex" justifyContent="flex-end" mt={2}>
                    <CircularProgress size={24} />
                </Box>
            )}
            {isEditing && (
                <Box display="flex" justifyContent="flex-end" mt={2}>
                    <Button variant="contained" color="primary" onClick={handleSaveClick}>
                        <Typography sx={{ minWidth: 80 }}>Lưu</Typography>
                    </Button>
                </Box>
            )}
        </Paper>
    );
};

export default CommentItem;
