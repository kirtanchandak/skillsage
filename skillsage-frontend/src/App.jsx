import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import AdminLogin from "./AdminPages/AdminLogin";
import AdminDashboard from "./AdminPages/AdminDashboard";
import NewCourse from "./pages/NewCourse";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/createcourse" element={<NewCourse />}></Route>
      </Routes>
    </>
  );
}

export default App;
