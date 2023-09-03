import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../components/Layout";
import { Course } from "./Courses";

function CoursePage() {
  const { id } = useParams();
  console.log(id);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const course = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/admin/course/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setCourse(res.data.course);
      } catch (err) {
        console.log(err);
      }
    };
    course();
  }, []);

  if (!course) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Layout>
        <div className="flex flex-col md:flex-row justify-center items-center pt-20 md:gap-20 px-8">
          <div className="">
            <Course course={course} />
          </div>
          <div className="">
            <EditCourse course={course} setCourse={setCourse} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default CoursePage;

const EditCourse = ({ course, setCourse }) => {
  const [title, setTitle] = useState(course.title);
  const [description, setDescription] = useState(course.description);
  const [price, setPrice] = useState(course.price);
  const [url, setURL] = useState(course.imageUrl);

  const updateCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3000/admin/courses/${course._id}`,
        {
          title: title,
          description: description,
          imageUrl: url,
          published: true,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      let updatedCourse = {
        _id: course._id,
        title: title,
        description: description,
        imageUrl: url,
        published: true,
        price,
      };
      setCourse(updatedCourse);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-[280px] mx-auto font-poppins">
      <div className="flex flex-col items-center mt-[10vh]">
        <h2 className="mb-5 text-gray-900 font-mono font-bold text-xl">
          Update Course
        </h2>
        <form>
          <input
            type="text"
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type=""
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type=""
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type=""
            className="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
            placeholder="Image URL"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
          <button
            className="bg-primary text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
            onClick={updateCourse}
          >
            Update Course
          </button>
        </form>
      </div>
    </div>
  );
};
