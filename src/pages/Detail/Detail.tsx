import React from "react";
import {  useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);
  // if (!categoryExist(id || "")) {
  //   return <Navigate to="/404" />;
  // }
  return <div></div>;
}

export default Detail;
