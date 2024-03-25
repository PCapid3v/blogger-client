import "./styles.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyList from "../../components/common/EmptyList/EmptyList";
import Chip from "../../components/common/Chip/Chip.jsx";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://16.171.5.84:4000/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setBlog(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Link className="blog-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">
              Published {new Date(blog.updatedAt).toLocaleDateString()}
            </p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              <Chip label={blog.category} />
            </div>
          </header>
          {blog.cover && <img src={blog.cover} alt="cover" />}
          <p className="blog-desc">{blog.content}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
