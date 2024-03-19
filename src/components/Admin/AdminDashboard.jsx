import ProfileForm from "./Profile/Profile";
import BlogForm from "./BlogForm/BlogForm";
import "./styles.css";
import { useState } from "react";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("profile");

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
      <div className="admin-dashboard">
      <aside className="sidebar">
        <button
          className={activeComponent === "profile" ? "active" : ""}
          onClick={() => handleComponentChange("profile")}
        >
          Profile
        </button>
        <button
          className={activeComponent === "blog" ? "active" : ""}
          onClick={() => handleComponentChange("blog")}
        >
          Blog
        </button>
      </aside>
      <main className="content">
        {activeComponent === "profile" ? (
          <ProfileForm  />
        ) : (
          <BlogForm  />
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;