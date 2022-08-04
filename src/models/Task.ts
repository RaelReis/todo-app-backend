import mongoose from "mongoose";

export interface Task {
  name: string;
  description: string;
  createdAt: Date;
  user_id: string;
}

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  status: { type: Boolean, default: false },
  user_id: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
