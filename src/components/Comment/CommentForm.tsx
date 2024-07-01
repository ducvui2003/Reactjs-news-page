import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { Comment } from '../../types/comment.type';
import {useComments} from "../../features/Comment/CommentContext";
import { v4 as uuidv4 } from 'uuid';

function CommentForm({ newsId }: { newsId: string }) {
    const user = useSelector((state: RootState) => state.authenticate);
    const { addComment } = useComments();

    const [newComment, setNewComment] = useState<string>('');

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (user.email && newComment.trim()) {
            const commentData: Comment = {
                id: uuidv4(), // Generate a unique id for each comment
                user: user,
                newsId: newsId,
                content: newComment,
                createAt: new Date().toISOString(),
            };
            addComment(commentData);
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
