import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
      </Routes>
    </>
  );
}

export default App;
