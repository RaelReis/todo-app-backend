require("dotenv").config();
import passport from "passport";
import express from "express";
import cors from "cors";
import routes from "./routes";
import db from "./config/dbConnect";
import "./strategies/local";
import "./strategies/bearer";

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(passport.initialize());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

routes(app);
