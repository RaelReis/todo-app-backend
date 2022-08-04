import mongoose from "mongoose";

mongoose.connect("mongodb+srv://crud:nb0Z3eWn0hIFa6Z8@cluster0.kai3rzl.mongodb.net/todo-app");

let db = mongoose.connection;

export default db;
