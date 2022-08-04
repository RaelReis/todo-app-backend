import Task from "../../models/Task";

export class UpdateTaskService {
  static async execute(user_id: string, task_id: string, name: string, description?: string) {
    const newTask = {
      task_id,
      name,
      description: description || "",
      user_id,
    };

    console.log("user_id:", user_id, "task_id:", task_id, "name:", name, "description:", description);
    const task = await Task.findOneAndUpdate({ user_id: user_id, _id: task_id }, newTask);

    if (!task) return new Error("Task or user not found");

    return newTask;
  }
}
