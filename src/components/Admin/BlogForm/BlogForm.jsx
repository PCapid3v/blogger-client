import { useState } from "react";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [published, setPublished] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");
  const [authorId, setAuthorId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title,
        content,
        cover,
        published,
        category,
        subCategory,
        authorAvatar,
        authorId: parseInt(authorId),
      };
      const response = await fetch(
        "https://blogger-server-aa82.onrender.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (response.ok) {
        console.log("New blog post created:", newPost);
        // Reset form fields after successful submission
        setTitle("");
        setContent("");
        setCover("");
        setPublished(false);
        setCategory("");
        setSubCategory("");
        setAuthorAvatar("");
        setAuthorId("");
      } else {
        console.error("Error creating blog post:", response.status);
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="blog-form">
      <h2>Create New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="cover">Cover Image URL:</label>
          <input
            type="text"
            id="cover"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="published">Published:</label>
          <input
            type="checkbox"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subCategory">Subcategory:</label>
          <input
            type="text"
            id="subCategory"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorAvatar">Author Avatar URL:</label>
          <input
            type="text"
            id="authorAvatar"
            value={authorAvatar}
            onChange={(e) => setAuthorAvatar(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="authorId">Author ID:</label>
          <input
            type="text"
            id="authorId"
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
    </div>
  );
};

export default BlogForm;
