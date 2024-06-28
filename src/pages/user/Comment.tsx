import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Comment() {
  const { id } = useOutletContext<{ id: string }>();
  return <div>Trang comment id: {id}</div>;
}

export default Comment;
