import express from "express";
import { GetAllTasksController } from "./../controllers/TaskControllers/GetAllTasksController";
import { CreateTaskController } from "./../controllers/TaskControllers/CreateTaskController";
import { UpdateTaskController } from "./../controllers/TaskControllers/UpdateTaskController";
import errorMiddleware from "./middlewares/errorsMiddleware";
import { authMiddlewares } from "./middlewares/auth";

const router = express.Router();

router
  .get("/task", authMiddlewares.bearer, GetAllTasksController.handle, errorMiddleware)
  .post("/task", authMiddlewares.bearer, CreateTaskController.handle, errorMiddleware)
  .put("/task/:id", authMiddlewares.bearer, UpdateTaskController.handle, errorMiddleware);

export default router;
