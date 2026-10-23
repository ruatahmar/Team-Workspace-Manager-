const verifyJWT = require("../middleware/auth.middleware");
const Router = require("express");
const {
  createTask,
  getTasks,
  deleteTask,
} = require("../controllers/task.controller");

const app = Router();

app.post("/", verifyJWT, createTask);
app.get("/", verifyJWT, getTasks);
app.delete("/:taskId", verifyJWT, deleteTask);

module.exports = app;
