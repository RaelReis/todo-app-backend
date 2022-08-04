import jwt from "jsonwebtoken";
import User from "../models/User";

export const createToken = (user: typeof User) => {
  const payload = {
    id: user,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET || "");
  return token;
};
