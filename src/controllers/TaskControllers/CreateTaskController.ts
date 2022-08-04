import express, { Request, Response } from "express";
import { CreateTaskService } from "./../../services/TaskServices/CreateTaskService";
import jwt from "jsonwebtoken";

export class CreateTaskController {
  static async handle(req: Request, res: Response, next: express.NextFunction) {
    const { name, description } = req.body;
    const { id: user_id } = req.user;

    try {
      const result = await CreateTaskService.execute(name, description, user_id);
      if (result instanceof Error) {
        return res.status(400).json({ error: result.message });
      }
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
