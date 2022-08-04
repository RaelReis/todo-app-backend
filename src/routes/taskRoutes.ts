import express from "express";
import { GetAllTasksController } from "./../controllers/TaskControllers/GetAllTasksController";
import { CreateTaskController } from "./../controllers/TaskControllers/CreateTaskController";
import { UpdateTaskController } from "./../controllers/TaskControllers/UpdateTaskController";
import { mongooseErrorHandler } from "../middlewares/mongooseErrorHandler";
import { authMiddlewares } from "../middlewares/auth";

const router = express.Router();

router
  .get("/task", authMiddlewares.bearer, GetAllTasksController.handle, mongooseErrorHandler)
  .post("/task", authMiddlewares.bearer, CreateTaskController.handle, mongooseErrorHandler)
  .put("/task/:id", authMiddlewares.bearer, UpdateTaskController.handle, mongooseErrorHandler);

export default router;
