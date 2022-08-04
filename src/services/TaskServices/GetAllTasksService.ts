import Task from "../../models/Task";
import User from "../../models/User";

export class GetAllTasksService {
  static async execute(user_id: string) {
    const user = await User.findById(user_id);
    if (!user) return new Error("User not found");

    const task = await Task.find({ user_id: user_id });
    if (!task) return new Error("Erro ao listar tasks");

    return task;
  }
}
