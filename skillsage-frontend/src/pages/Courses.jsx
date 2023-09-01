import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/courses",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCourses(response.data.courses);
      } catch (err) {
        console.log(err);
      }
    };
    getCourses();
  }, []);

  return (
    <>
      <Layout>
        <div className="mt-8 px-8">
          <h1 className="text-center text-5xl font-dm-serif-display">
            Courses
          </h1>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {courses.map((course) => (
                <Course course={course} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export const Course = (props) => {
  return (
    <Link to={`/course/${props.course._id}`}>
      <div key={props.course._id} className=" font-poppins">
        <div class="max-w-sm bg-white border rounded-lg  ">
          <a href="#">
            <img
              class="max-w-[100%] h-[255px]"
              src={props.course.imageUrl}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold ">{props.course.title}</h5>
            </a>
            <p class="font-normal ">{props.course.description}</p>
            <p class="font-normal ">${props.course.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Courses;
