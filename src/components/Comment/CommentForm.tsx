import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Comment } from '../../types/comment.type';
import { add } from '../../features/Comment/comment.slice';

function CommentForm({ newsId }: { newsId: string }) {
    const user = useSelector((state: RootState) => state.authenticate);
    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState<string>('');

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user.email && newComment.trim()) {
            const commentData: Comment = {
                id: '', // Will be generated in the reducer
                user: user,
                newsId: newsId,
                content: newComment,
                createAt: new Date().toISOString(),
            };
            dispatch(add(commentData));
            setNewComment('');
        }
    };

    return (
        <form onSubmit={handleCommentSubmit}>
            <TextField
                label="Bình luận"
                multiline
                rows={3}
                placeholder="Nhập bình luận của bạn"
                value={newComment}
                onChange={handleCommentChange}
                variant="outlined"
                fullWidth
                margin="normal"
                disabled={!user.email}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }} disabled={!user.email}>
                Gửi
            </Button>
        </form>
    );
};

export default CommentForm;
