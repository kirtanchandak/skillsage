import express from "express";

const router = express.Router();

const adminAuthentication = (req, res, next) => {
  const { username, password } = req.body;
  const admin = admins.find(
    (admin) => admin.username === username && admin.password === password
  );
  if (admin) {
    req.admin = admin;
    next();
  } else {
    res.status(401).send({ error: "Admin not found!" });
  }
};

const admins = [];

//get all admins
router.get("/get", (req, res) => {
  res.send({ admins });
});

//signup new admin
router.post("/signup", (req, res) => {
  const { username, password } = req.body;
  const admin = { username, password };
  const existingAdmin = admins.find((admin) => admin.username === username);

  if (existingAdmin) {
    res.status(400).send({ error: "Admin already exists!" });
  } else {
    admins.push(admin);
    res.send({ admin });
  }
});

//login new admin
router.post("/login", adminAuthentication, (req, res) => {
  res.json({ message: "Logged in successfully" });
});

export { router as adminRouter };
