import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import InvalidArgumentError from "../utils/invalidArgumentError";

import { GetUserByUsernameService } from "../services/UserServices/GetUserByUsernameService";

const verifyUsername = async (username: string) => {
  const user = await GetUserByUsernameService.execute(username);
  if (!user) throw new InvalidArgumentError("User not found");
  return user;
};

const verifyPassword = async (password: string, hash: string) => {
  const isValid = await bcrypt.compare(password, hash);
  if (!isValid) throw new InvalidArgumentError("Invalid password");
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false,
    },
    async (username, password, done) => {
      try {
        const user = await verifyUsername(username);
        await verifyPassword(password, user.hashPassword);
        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);
