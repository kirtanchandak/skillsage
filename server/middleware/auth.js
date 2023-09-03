import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "./.env" });
const secret = process.env.JWT_SECRET;

export const authenticateJWT = (req, res, next) => {
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
