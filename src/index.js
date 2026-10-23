const express = require("express");
const connectDb = require("./db");
const config = require("./config");
//routes
const authRouter = require("./routes/auth.routes");
const taskRouter = require("./routes/task.routes");
const workspaceRouter = require("./routes/workspace.routes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/task", taskRouter);
app.use("/api/workspace", workspaceRouter);

connectDb();
app.listen(config.PORT, () => {
  console.log("Listening on port", config.PORT);
});
