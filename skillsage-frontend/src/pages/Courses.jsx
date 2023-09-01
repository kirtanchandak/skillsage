import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

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
        <div className="mt-8">
          <h1 className="text-center text-5xl font-dm-serif-display">
            Courses
          </h1>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
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

const Course = (props) => {
  return (
    <div key={props.course._id} className="bg-gray-500 font-poppins">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="" src={props.course.imageUrl} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.course.title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.course.description}
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg bg-primary"
          >
            Edit Course
          </a>
        </div>
      </div>
    </div>
  );
};

export default Courses;
