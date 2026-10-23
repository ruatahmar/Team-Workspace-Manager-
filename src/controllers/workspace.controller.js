const Workspace = require("../model/workspace.model");
const { workspaceSchema } = require("../types/types");

const createWorkspace = async (req, res) => {
  try {
    const { data, success } = workspaceSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({
        message: "Invalid inputs",
      });
    }
    const { name } = data;
    const { userId } = req.user;

    const workspace = await Workspace.create({
      name,
      userId,
    });

    return res.status(200).json({
      message: "Workspace created",
      workspaceId: workspace._id,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const getWorkspace = async (req, res) => {
  try {
    const { userId } = req.user;
    const workspaces = await Workspace.find({
      userId,
    });

    return res.status(200).json({
      workspaces,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const deleteWorkspace = async (req, res) => {
  try {
    const workspaceId = req.params.workspaceId;
    const { userId } = req.user;

    await Workspace.findByIdAndDelete({
      _id: workspaceId,
      userId,
    });

    return res.status(200).json({
      message: "Workspace deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
module.exports = { createWorkspace, getWorkspace, deleteWorkspace };
