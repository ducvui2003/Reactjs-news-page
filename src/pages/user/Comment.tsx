import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { CommentProvider, getCommentListByUserId } from '../../services/commentServices';
import CommentItem from "../../components/Comment/CommentItem";
import { Comment } from '../../types/comment.type';
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import CommentList from "../../components/Comment/CommentList";

function Comment() {
    const userId = useSelector((state: RootState) => state.authenticate.id);
    const [userComments, setUserComments] = useState<Comment[]>([]);

    useEffect(() => {
        const comments = getCommentListByUserId(userId);
        setUserComments(comments);
    }, [userId]);

    const handleDeleteComment = (commentId: string) => {
        setUserComments(prevComments => prevComments.filter(comment => comment.id !== commentId));
    };
    const handleUpdateComment = (comment: Comment) => {
        setUserComments(prevComments => prevComments.map(item => item.id === comment.id ? comment : item));
    }

    return (
        <div>
            {userComments.length === 0 ? (
                <Typography>
                    Bạn chưa có bình luận nào!
                </Typography>
            ) : (
                <div>
                    {userComments.map((comment) => (
                        <CardContent key={comment.id}>
                            <CommentProvider>
                                <CommentItem comment={comment} onDelete={handleDeleteComment} onUpdate={handleUpdateComment} />
                            </CommentProvider>
                        </CardContent>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Comment;
