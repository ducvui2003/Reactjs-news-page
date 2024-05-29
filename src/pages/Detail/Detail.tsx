import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { categoryExist } from "../../services/categoryService";

function Detail() {
  const { id } = useParams();
  console.log("id: ",id);
  // if (!categoryExist(id || "")) {
  //   return <Navigate to="/404" />;
  // }
  return <div></div>;
}

export default Detail;
