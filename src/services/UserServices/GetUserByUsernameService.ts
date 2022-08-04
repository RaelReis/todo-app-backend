import User from "../../models/User";

export class GetUserByUsernameService {
  static async execute(username: string) {
    const user = await User.findOne({ username: username }).populate("tasks");
    return user;
  }
}
