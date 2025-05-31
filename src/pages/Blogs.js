import React, { useState } from "react";
import { blogsData } from "../datas/data";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, 200);
    } else {
      return str;
    }
  };
  return (
    <div>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 500)}</p>
              <Link to={title} state={{ id, title, body }}>
                Learn More
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
