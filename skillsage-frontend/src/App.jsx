import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Courses from "./pages/Courses";
import NewCourse from "./pages/NewCourse";
import CoursePage from "./pages/CoursePage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/createcourse" element={<NewCourse />}></Route>
          <Route path="/course/:id" element={<CoursePage />}></Route>
        </Routes>
      </RecoilRoot>
    </>
  );
}

export default App;
