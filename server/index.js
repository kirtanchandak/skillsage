import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { adminRouter } from "./routes/admin.js";
import { userRouter } from "./routes/user.js";

dotenv.config({ path: "./.env" });

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
