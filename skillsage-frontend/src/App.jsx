import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import NewCourse from "./pages/NewCourse";
import CoursePage from "./pages/CoursePage";
import { useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <>
      <InitUser />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/createcourse" element={<NewCourse />}></Route>
        <Route path="/course/:id" element={<CoursePage />}></Route>
      </Routes>
    </>
  );
}

export default App;

const InitUser = () => {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.username) {
        setUser({ isLoading: false, userEmail: res.data.username });
      } else {
        setUser({ isLoading: false, userEmail: null });
      }
    } catch (e) {
      console.log("error");
      setUser({ isLoading: false, userEmail: null });
    }
  };

  useEffect(() => {
    init();
  }, []);
};
