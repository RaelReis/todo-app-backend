import express, { Express } from "express";
import user from "./userRoutes";
import task from "./taskRoutes";

const routes = (app: Express) => {
  app.route("/").get((req, res) => {
    res.send("Hello World!");
  });

  app.use(
    express.json(),
    user,
    task
  )

};

export default routes;
