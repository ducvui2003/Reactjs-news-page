import React, { useState } from 'react';
import { Typography, Snackbar, Alert, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { CommentProvider } from '../../hooks/commentHook';

function Comment({ newsId }: { newsId: string }) {
    const user = useSelector((state: RootState) => state.authenticate);
    const [open, setOpen] = useState<boolean>(false);

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Box mt={4}>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '2rem' }}>
                Ý kiến
            </Typography>
            {!user.email && (
                <Alert severity="warning">Bạn cần đăng nhập để bình luận.</Alert>
            )}
            <CommentProvider>
                <CommentForm newsId={newsId} />
                <CommentList newsId={newsId} />
            </CommentProvider>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    Bạn cần đăng nhập để bình luận.
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default Comment;
