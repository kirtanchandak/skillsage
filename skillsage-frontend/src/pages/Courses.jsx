import React, { useEffect, useState } from "react";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/courses");
        setCourses(response.data.courses);
      } catch (err) {
        console.log(err);
      }
    };
    getCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
        {courses.map((course) => (
          <div key={course._id} className="bg-gray-500">
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <p>Price: {course.price}</p>
            <button className="bg-red-200">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
