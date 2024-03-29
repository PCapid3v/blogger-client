import { useEffect, useState } from "react";
import { blogList } from "../../config/data";
import BlogList from "../../components/Home/BlogList/BlogList";
import Header from "../../components/Home/Header/Header";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import EmptyList from "../../components/common/EmptyList/EmptyList";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  console.log(blogList)

  useEffect(() => {
    fetchBlogs()
  },[])
  
  const fetchBlogs = () => {
    fetch("https://blogger-server-aa82.onrender.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const posts = data.data.posts;
        setBlogs(posts);
      });
  }



  

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };
  
  

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogs;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setSearchKey("");
    fetchBlogs()
  };

  return (
    <div>
      <Header />

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
