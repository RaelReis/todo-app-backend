import User, { UserInterface } from "../../models/User";
import { createToken } from "../../utils/createJwt";

export class LoginUserService {
  static async execute(username: string) {
    const user = (await User.findOne({ username: username })) as UserInterface | null;

    if (!user) return new Error("Username not found");
    const token = createToken(user);

    return token;
  }
}
