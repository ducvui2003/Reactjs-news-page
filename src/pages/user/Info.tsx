import React from 'react';
import { useOutletContext } from 'react-router-dom';

function Info() {
  console.log(useOutletContext());
  const id = useOutletContext<string>();
  return <div>Đây là trang thông tin id:{id}</div>;
}

export default Info;
