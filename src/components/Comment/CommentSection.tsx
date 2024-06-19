import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';

interface Comment {
  author: string;
  text: string;
  date: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    {
      author: 'Nguyễn Văn A',
      text: 'Bài viết rất hay và bổ ích!',
      date: '08/06/2024 10:30',
    },
    {
      author: 'Trần Thị B',
      text: 'Cảm ơn tác giả đã chia sẻ thông tin.',
      date: '08/06/2024 12:15',
    },
  ]);
  const [newComment, setNewComment] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() && author.trim()) {
      const date = new Date().toLocaleString('vi-VN');
      setComments([...comments, { author, text: newComment, date }]);
      setNewComment('');
      setAuthor('');
    }
  };

  return (
    <div className="mt-4">
      <h5>Ý kiến</h5>
      <Form onSubmit={handleCommentSubmit}>
        <Form.Group controlId="comment" className="mt-2">
          <Form.Label>Bình luận</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nhập bình luận của bạn"
            value={newComment}
            onChange={handleCommentChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2 btn-lg ">
          Gửi
        </Button>
      </Form>
      <ListGroup className="mt-4">
        {comments.map((comment, index) => (
          <ListGroup.Item key={index}>
            <strong>{comment.author}</strong> <em>{comment.date}</em>
            <p>{comment.text}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentSection;
