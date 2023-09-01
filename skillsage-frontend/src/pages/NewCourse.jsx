import React, { useState } from "react";
import AdminLayout from "../AdminPages/AdminLayout";
import axios from "axios";

function NewCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [url, setURL] = useState("");

  const token = localStorage.getItem("token");
  console.log(token);

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:3000/admin/courses",
        {
          title: title,
          description: description,
          imageUrl: url,
          published: true,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Course created successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {token ? (
        <AdminLayout>
          <div class="max-w-[280px] mx-auto font-poppins">
            <div class="flex flex-col items-center mt-[10vh]">
              <h2 class="mb-5 text-gray-900 font-mono font-bold text-xl">
                New Course
              </h2>
              <form>
                <input
                  type="text"
                  class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                <input
                  type=""
                  class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type=""
                  class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <input
                  type=""
                  class="w-full px-6 py-3 mb-2 border border-slate-600 rounded-lg font-medium "
                  placeholder="Image URL"
                  onChange={(e) => setURL(e.target.value)}
                />
                <button
                  class="bg-primary text-white text-base rounded-lg py-2.5 px-5 transition-colors w-full text-[19px]"
                  onClick={handleCreateCourse}
                >
                  Create Course
                </button>
              </form>
            </div>
          </div>
        </AdminLayout>
      ) : (
        <div>Not logged in!</div>
      )}
    </>
  );
}

export default NewCourse;
