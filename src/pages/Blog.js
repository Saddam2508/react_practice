import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Blog = () => {
  const { title } = useParams();
  const location = useLocation();

  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0, 600)}</p>
      <p>{location.state.body.slice(601, 2000)}</p>
    </div>
  );
};

export default Blog;
