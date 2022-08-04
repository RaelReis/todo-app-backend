import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import jwt from "jsonwebtoken";
import { SearchUserByIdService } from "../services/UserServices/SearchUserById";

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || "");
      const user = await SearchUserByIdService.execute(payload.id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  })
);
