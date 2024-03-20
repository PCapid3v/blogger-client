import { Link } from "react-router-dom";
import Chip from "../../../common/Chip/Chip";
import "./styles.css";

const BlogItem = ({ blog }) => {
  const { title, content, authorName, category, updatedAt, id } = blog;

  console.log({blog})

  return (
    <div className="blogItem-wrap">
      {blog.cover && (
        <img className="blogItem-cover" src={blog.cover} alt="cover" />
      )}
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blogItem-desc">{content.substring(0, 100)}...</p>
      <footer>
        <div className="blogItem-author">
          {blog.authorAvatar && <img src={blog.authorAvatar} alt="avatar" />}
          <div>
            <h6>{authorName}</h6>
            <p>{new Date(updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <Link className="blogItem-link" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
