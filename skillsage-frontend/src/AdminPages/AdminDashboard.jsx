import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AdminLayout from "./AdminLayout";

function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const userRole = decodedToken.role;
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/admin/allcourses"
        );
        setCourses(response.data.courses);
      } catch (err) {
        console.log(err);
      }
    };
    getCourses();
  });
  return (
    <>
      {userRole === "admin" ? (
        <AdminLayout>
          <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
            {courses.map((course) => (
              <div key={course._id} className="bg-gray-500">
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <p>Price: {course.price}</p>
                <button className="bg-red-200">Edit Course</button>
              </div>
            ))}
          </div>
        </AdminLayout>
      ) : (
        <div>Not logged in!</div>
      )}
    </>
  );
}

export default AdminDashboard;
