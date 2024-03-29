import BlogItem from "./BlogItem/BlogItem";
import "./styles.css";

const BlogList = ({ blogs }) => {
  return (
    <div className="blogList-wrap">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog._id} />
      ))}
    </div>
  );
};

export default BlogList;
