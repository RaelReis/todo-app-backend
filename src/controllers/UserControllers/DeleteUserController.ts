import express, { Request, Response } from "express";
import { DeleteUserService } from "../../services/UserServices/DeleteUserService";

export class DeleteUserController {
  static async handle(req: Request, res: Response, next: express.NextFunction) {
    const { id } = req.params;
    try {
      const result = await DeleteUserService.execute(id);
      if (result instanceof Error) return res.status(400).json({ error: result.message });
      return res.status(200).json({ message: "User deleted" });
    } catch (error) {
      next(error);
    }
  }
}
