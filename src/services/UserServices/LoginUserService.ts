import User from "../../models/User";
import { createToken } from "../../utils/createJwt";

export class LoginUserService {
  static async execute(username: string) {
    const user = await User.findOne({ username: username });

    if (!user) return new Error("Username not found");
    const token = createToken(user);

    return token;
  }
}
