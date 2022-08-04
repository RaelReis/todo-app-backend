import jwt from "jsonwebtoken";
import { UserInterface } from "../models/User";

export const createToken = (user: UserInterface) => {
  const payload = {
    id: user,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
    expiresIn: "15m",
  });
  return token;
};
