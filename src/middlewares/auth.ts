import express, { Request, Response } from "express";
import passport from "passport";

export const authMiddlewares = {
  local: (req: Request, res: Response, next: express.NextFunction) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error && error.name === "InvalidArgumentError") return res.status(401).json({ error: error.message });
      if (error) return res.status(500).json({ error: error.message });
      if (!user) return res.status(401).json();
      req.user = user;
      return next();
    })(req, res, next);
  },

  bearer: (req: Request, res: Response, next: express.NextFunction) => {
    passport.authenticate("bearer", { session: false }, (error, user, info) => {
      if (error && error.name === "JsonWebTokenError") return res.status(401).json({ error: error.message });
      if (error && error.name === "TokenExpiredError")
        return res.status(401).json({ error: error.message, expiredAt: error.expiredAt });

      if (error) return res.status(500).json({ error: error.message });
      req.user = user;
      return next();
    })(req, res, next);
  },
};
