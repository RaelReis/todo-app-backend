import express, { Request, Response } from "express";
import { RegisterUserService } from "../../services/UserServices/RegisterUserService";

export class RegisterUserController {
  static async handle(req: Request, res: Response, next: express.NextFunction) {
    const { username, password } = req.body;
    try {
      const result = await RegisterUserService.execute(username, password);
      if (result instanceof Error) return res.status(400).json({ error: result.message });
      return res.status(201).send(result);
    } catch (error) {
      next(error);
    }
  }
}
