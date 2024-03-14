import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import LoginForm from "./components/Login/Login.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/Admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
