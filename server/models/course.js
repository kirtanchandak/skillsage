import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  published: Boolean,
});

const Course = mongoose.model("Course", CourseSchema);

export default Course;
