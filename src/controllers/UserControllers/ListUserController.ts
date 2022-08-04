import { Request, Response } from "express";
import { ListUserService } from "../../services/UserServices/ListUserService";

export class ListUserController {
  static async handle(req: Request, res: Response) {
    const result = await ListUserService.execute();

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }
    return res.json(result);
  }
}
