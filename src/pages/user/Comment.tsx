import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { CommentProvider, getCommentListByUserId } from '../../services/commentServices';
import CommentItem from "../../components/Comment/CommentItem";
import { Comment } from '../../types/comment.type';
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

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
                                <CommentItem comment={comment} onDelete={handleDeleteComment} />
                            </CommentProvider>
                        </CardContent>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Comment;
