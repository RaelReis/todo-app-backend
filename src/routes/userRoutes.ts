import express from "express";
import { GetUserByUsernameController } from "./../controllers/UserControllers/GetUserByUsernameController";
import { ListUserController } from "../controllers/UserControllers/ListUserController";
import { RegisterUserController } from "../controllers/UserControllers/RegisterUserController";
import { DeleteUserController } from "../controllers/UserControllers/DeleteUserController";
import { LoginUserController } from "../controllers/UserControllers/LoginUserController";
import { authMiddlewares } from "./middlewares/auth";
import errorHandler from "./middlewares/errorsMiddleware";

const router = express.Router();

router
  .get("/user", ListUserController.handle)
  .get("/user/:username", GetUserByUsernameController.handle, errorHandler)
  .post("/user/register", RegisterUserController.handle, errorHandler)
  .post("/user/login", authMiddlewares.local, LoginUserController.handle, errorHandler)
  .delete("/user/:id", authMiddlewares.bearer, DeleteUserController.handle, errorHandler);

export default router;
