import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";
import Course from "../models/course.js";
import { authenticateJWT } from "../middleware/auth.js";

dotenv.config({ path: "./.env" });

const router = express.Router();

const secret = process.env.JWT_SECRET;

//signup new admin
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const existingAdmin = await Admin.findOne({ username });

  if (existingAdmin) {
    res.status(400).send({ error: "Admin already exists!" });
  } else {
    const admin = { username, password };
    const newAdmin = new Admin(admin);
    newAdmin.save();
    const token = jwt.sign({ username, role: "admin" }, secret);
    res.status(200).json({ message: "Admin created successfully!", token });
  }
});

//login admin
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (admin) {
    const token = jwt.sign({ username, role: "admin" }, secret, {
      expiresIn: "1h",
    });

    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

//create a new course
router.post("/courses", authenticateJWT, async (req, res) => {
  const course = new Course(req.body);
  await course.save();

  res.json({
    message: "Course created successfully!",
    courseId: course.id,
  });
});

//edit a course
router.put("/courses/:courseId", authenticateJWT, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findOneAndUpdate({ _id: courseId }, req.body, {
    new: true,
  });
  if (course) {
    res.json({ message: "Course updated successfully!" });
  } else {
    res.status(404).json({ error: "Course not found!" });
  }
});

//admin details
router.get("/me", authenticateJWT, async (req, res) => {
  res.json({
    username: req.user.username,
  });
});

//get a course
router.get("/course/:id", authenticateJWT, async (req, res) => {
  const courseId = req.params.id;
  const course = await Course.findById(courseId);
  res.json({ course });
});

//get all courses
router.get("/courses", authenticateJWT, async (req, res) => {
  const courses = await Course.find({});
  res.json({ courses });
});

export { router as adminRouter };
