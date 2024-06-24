import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Typography, Snackbar, Alert } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../features/store';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

function Comment() {
    const user = useSelector((state: RootState) => state.authenticate);
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className="mt-4">
            <Typography variant="h5" gutterBottom>Ý kiến</Typography>
            {!user.email && (
                <Alert severity="warning">
                    Bạn cần đăng nhập để bình luận.
                </Alert>
            )}
            <CommentForm />
            <CommentList newsId="current-news-id" />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    Bạn cần đăng nhập để bình luận.
                </Alert>
            </Snackbar>
        </div>
    );
}

export default Comment;
