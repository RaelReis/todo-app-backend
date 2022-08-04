import { GetUserByUsernameService } from "./../../services/UserServices/GetUserByUsernameService";
import { Request, Response } from "express";

export class GetUserByUsernameController {
  static async handle(req: Request, res: Response) {
    const { username } = req.params;

    const result = await GetUserByUsernameService.execute(username);

    if (result instanceof Error) {
      return res.status(400).json({ error: result.message });
    }
    return res.json(result);
  }
}
