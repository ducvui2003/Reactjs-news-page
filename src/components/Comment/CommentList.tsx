import React from 'react';
import { Box } from '@mui/material';
import CommentItem from './CommentItem';
import { useComments } from '../../hooks/commentHook';

interface CommentListProps {
  newsId?: string;
  userId?: string;
}

const CommentList: React.FC<CommentListProps> = ({
  newsId
}) => {
  const { comments } = useComments();

  const filteredNewsIdComments = comments.filter(
    (comment) =>
      (!newsId || comment.newsId === newsId)
  );

  return (
    <Box mt={4}>
      {filteredNewsIdComments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onDelete={() => {}} onUpdate={() => {}}/>
      ))}
    </Box>
  );
};

export default CommentList;
