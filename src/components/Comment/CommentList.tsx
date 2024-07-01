import React from 'react';
import { Box } from '@mui/material';
import CommentItem from './CommentItem';
import { useComments } from '../../services/commentServices';

interface CommentListProps {
  newsId?: string;
  userId?: string;
}

const CommentList: React.FC<CommentListProps> = ({
  newsId,
  userId,
}) => {
  const { comments } = useComments();

  const filteredComments = comments.filter(
    (comment) =>
      (!newsId || comment.newsId === newsId) &&
      (!userId || comment.user.id === userId),
  );

  return (
    <Box mt={4}>
      {filteredComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onDelete={() => {}} />
      ))}
    </Box>
  );
};

export default CommentList;
