import bodyParser from "body-parser";
import express from "express";
import { adminRouter } from "./routes/admin.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
