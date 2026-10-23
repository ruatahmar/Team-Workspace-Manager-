const Task = require("../model/task.model");
const { taskSchema } = require("../types/types");

const createTask = async (req, res) => {
  try {
    const { data, success } = taskSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({
        message: "Invalid inputs",
      });
    }

    const { title, description } = data;
    const workspaceId = req.headers.workspaceid;
    if (!workspaceId) {
      return res.status(400).json({
        message: "Headers missing",
      });
    }
    await Task.create({
      title,
      description,
      workspaceId,
    });

    return res.status(200).json({
      message: "Task created",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const workspaceId = req.headers.workspaceid;

    if (!workspaceId) {
      return res.status(400).json({
        message: "Headers missing",
      });
    }

    const tasks = await Task.find({
      workspaceId,
    });

    return res.status(200).json({
      tasks,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const workspaceId = req.headers.workspaceid;

    if (!workspaceId) {
      return res.status(400).json({
        message: "Headers missing",
      });
    }

    await Task.findByIdAndDelete({
      _id: taskId,
      workspaceId,
    });

    return res.status(200).json({
      message: "Task deleted",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = { createTask, deleteTask, getTasks };
