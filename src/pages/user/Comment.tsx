import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { getCommentListByUserId } from '../../services/commentServices';
import CommentItem from "../../components/Comment/CommentItem";
import { Comment } from '../../types/comment.type';
import {CardContent} from "@mui/material";
function Comment() {
    const userId = useSelector((state: RootState) => state.authenticate.id);
    const [userComments, setUserComments] = useState<Comment[]>([]);

    useEffect(() => {
        const comments = getCommentListByUserId(userId);
        setUserComments(comments);
    }, [userId]);

    return (
        <div>
            {userComments.map((comment) => (
                <CardContent>
                    <CommentItem key={comment.id} comment={comment} />
                </CardContent>
            ))}
        </div>
    )
}

export default Comment;