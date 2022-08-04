import User from "../../models/User";

export class SearchUserByIdService {
  static async execute(userId: string) {
    const user = await User.findOne({ _id: userId });
    if (!user) return new Error("User not found");

    return user;
  }
}
