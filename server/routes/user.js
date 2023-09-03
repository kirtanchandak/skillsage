import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";
import Course from "../models/course.js";
import { authenticateJWT } from "../middleware/auth.js";

dotenv.config({ path: "./.env" });

const router = express.Router();

const secret = process.env.JWT_SECRET;

//user signup
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username, password });
  if (existingUser) {
    res.status(400).send({ error: "User already exists!" });
  } else {
    const user = new User({ username, password });
    user.save();
    const token = jwt.sign({ username, role: "user" }, secret);
    res.send({ message: "User created successfully!", token });
  }
});

//user login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username, role: "user" }, secret, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid username or password" });
  }
});

//get all courses
router.get("/courses", authenticateJWT, async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});

//purchase course by ID
router.post("/courses/:id", authenticateJWT, async (req, res) => {
  const course = await Course.findById(req.params.id);
  console.log(course);
  if (course) {
    const user = await User.findOne({ username: req.user.username });
    if (user) {
      user.purchasedCourses.push(course);
      await user.save();
      res.json({ message: "Course purchased successfully!" });
    } else {
      res.send({ message: "User not found!" });
    }
  } else {
    res.send({ message: "Course not found!" });
  }
});

//get all purchased courses
router.get("/purchasedCourses", authenticateJWT, async (req, res) => {
  const user = await User.findOne({ username: req.user.username });
  if (user) {
    res.json({ purchasedCourses: user.purchasedCourses || [] });
  } else {
    res.send({ message: "User has not purchased any course!" });
  }
});

export { router as userRouter };
