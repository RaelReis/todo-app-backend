import Task from "../../models/Task";
import User from "../../models/User";

export class CreateTaskService {
  static async execute(name: string, description: string, user_id: string) {
    const task = await Task.create({ name, description, user_id });
    if (!task) return new Error("Task not created");

    const user = await User.findByIdAndUpdate(user_id, { $push: { tasks: task } });
    if (!user) return new Error("User not found");

    return task;
  }
}
