import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Card, List, ListItem, Typography } from '@mui/material';
import { Comment } from '../../types/comment.type';
import { commentData } from '../../data/commentData';

function Comment() {
    const [newComment, setNewComment] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [comments, setComments] = useState<Comment[]>(commentData);

    const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (newComment.trim() && email.trim() && password.trim()) {
            const newUser: User = {
                id: crypto.randomUUID(),
                email,
                password,
            };
            const newCommentData: Comment = {
                id: crypto.randomUUID(),
                user: newUser,
                newsId: 'current-news-id', // Replace with the actual newsId
                content: newComment,
                createAt: new Date(),
            };
            setComments([...comments, newCommentData]);
            setNewComment('');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="mt-4">
            <Typography variant="h5" gutterBottom>Ý kiến</Typography>
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
                />
                <TextField
                    label="Tác giả"
                    placeholder="Nhập tên của bạn"
                    value={author}
                    onChange={handleAuthorChange}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Gửi
                </Button>
            </form>
            <List sx={{ mt: 4 }}>
                {comments.map((comment: Comment) => (
                    <Card key={comment.id} variant="outlined" sx={{ mb: 2 }}>
                        <ListItem>
                            <div>
                                <Typography variant="subtitle1"><strong>{comment.userId}</strong></Typography>
                                <Typography variant="body2" color="textSecondary"><em>{new Date(comment.createAt).toLocaleString('vi-VN')}</em></Typography>
                                <Typography variant="body1">{comment.content}</Typography>
                            </div>
                        </ListItem>
                    </Card>
                ))}
            </List>
        </div>
    );
}

export default Comment;
