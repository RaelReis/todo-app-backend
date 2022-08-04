import express, { Request, Response } from "express";
import { LoginUserService } from "../../services/UserServices/LoginUserService";
import { createToken } from "../../utils/createJwt";

export class LoginUserController {
  static async handle(req: Request, res: Response, next: express.NextFunction) {
    const { username, password } = req.body;

    console.log(req.user);

    const token = await LoginUserService.execute(username);
    res.set("Authorization", `Bearer ${token}`);
    res.status(204).send();
  }
}
