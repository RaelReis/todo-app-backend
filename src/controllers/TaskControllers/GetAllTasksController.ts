import express, { Request, Response } from "express";
import { GetAllTasksService } from "./../../services/TaskServices/GetAllTasksService";
import { UserInterface } from "../../models/User";

export class GetAllTasksController {
  static async handle(req: Request, res: Response, next: express.NextFunction) {
    const { id: user_id } = req.user as UserInterface;

    try {
      const result = await GetAllTasksService.execute(user_id);
      if (result instanceof Error) {
        return res.status(400).json({ error: result.message });
      }
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
