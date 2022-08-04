import { Task } from "./Task";
import mongoose from "mongoose";

export interface UserInterface {
  id: string;
  username: string;
  hashPassword: string;
  tasks: Task[];
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  hashPassword: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

const User = mongoose.model("User", userSchema);

export default User;
