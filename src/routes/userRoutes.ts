import express from "express";
import { GetUserByUsernameController } from "./../controllers/UserControllers/GetUserByUsernameController";
import { ListUserController } from "../controllers/UserControllers/ListUserController";
import { RegisterUserController } from "../controllers/UserControllers/RegisterUserController";
import { DeleteUserController } from "../controllers/UserControllers/DeleteUserController";
import { LoginUserController } from "../controllers/UserControllers/LoginUserController";
import { authMiddlewares } from "../middlewares/auth";
import { mongooseErrorHandler } from "../middlewares/mongooseErrorHandler";

const router = express.Router();

router
  .get("/user", ListUserController.handle)
  .get("/user/:username", GetUserByUsernameController.handle, mongooseErrorHandler)
  .post("/user/register", RegisterUserController.handle, mongooseErrorHandler)
  .post("/user/login", authMiddlewares.local, LoginUserController.handle, mongooseErrorHandler)
  .delete("/user/:id", authMiddlewares.bearer, DeleteUserController.handle, mongooseErrorHandler);

export default router;
