import bcrypt from "bcrypt";
import User from "../../models/User";

export class RegisterUserService {
  static async execute(username: string, password: string) {
    if (!username) return new Error("Path username is required");
    if (!password) return new Error("Path password is required");

    const hashPassword = await RegisterUserService.generateHash(password);
    const user = await User.create({ username, hashPassword });

    if (!user) return new Error("User not created");
    return user;
  }

  private static generateHash = (password: string) => {
    const costHash = 12;
    return bcrypt.hash(password, costHash);
  };
}
