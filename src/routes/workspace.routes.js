const {
  createWorkspace,
  getWorkspace,
  deleteWorkspace,
} = require("../controllers/workspace.controller");
const verifyJWT = require("../middleware/auth.middleware");
const Router = require("express");

const app = Router();

app.post("/", verifyJWT, createWorkspace);
app.get("/", verifyJWT, getWorkspace);
app.delete("/:workspaceId", verifyJWT, deleteWorkspace);

module.exports = app;
