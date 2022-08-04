import User from "../../models/User";

export class DeleteUserService {
  static async execute(user_id: string) {
    const userList = await User.findByIdAndDelete(user_id);

    if (!userList) return new Error("User not found");
    return userList;
  }
}
