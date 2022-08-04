import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer";
import jwt from "jsonwebtoken";
import { SearchUserByIdService } from "../services/UserServices/SearchUserById";

interface JWTPayload {
  id: string;
}

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || "") as JWTPayload;
      const user = await SearchUserByIdService.execute(payload.id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  })
);
