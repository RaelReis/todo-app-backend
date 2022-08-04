import User from "../../models/User";

export class ListUserService {
  static async execute() {
    const userList = await User.find({}).populate("tasks");

    if (!userList) return new Error("User list not found");
    return userList;
  }
}
