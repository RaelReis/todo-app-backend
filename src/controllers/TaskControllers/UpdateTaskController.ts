import { UpdateTaskService } from "../../services/TaskServices/UpdateTaskService";
import express, { Request, Response } from "express";
import { UserInterface } from "../../models/User";

export class UpdateTaskController {
  static async handle(req: Request, res: Response, next: express.NextFunction) {
    const { id: user_id } = req.user as UserInterface;
    const { id: task_id } = req.params;
    const { name, description } = req.body;

    if (!name) return res.status(400).json({ error: "Task name is required" });

    try {
      const result = await UpdateTaskService.execute(user_id, task_id, name, description);
      console.log("aaa", result);
      if (result instanceof Error) {
        return res.status(401).json({ error: result.message });
      }
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
