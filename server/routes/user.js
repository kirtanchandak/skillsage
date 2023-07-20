import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config({ path: "./.env" });

const router = express.Router();

const secret = process.env.JWT_SECRET;

const authenticateJWTUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, secret, (err, user) => {
      if (err) {
        return res.status(403).send({ error: "Token not valid!" });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).send({ error: "You are not authenticated!" });
  }
};

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

export { router as userRouter };
