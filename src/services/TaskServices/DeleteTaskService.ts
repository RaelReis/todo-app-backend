import Task from "../../models/Task";

export class DeleteTaskService {
  static async execute(user_id: string, task_id: string) {
    const task = await Task.findOneAndDelete({ user_id: user_id, _id: task_id });

    if (!task) return new Error("Task or user not found");

    return task;
  }
}