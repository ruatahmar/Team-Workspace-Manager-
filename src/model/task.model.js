const { model, Schema } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: "Workspace",
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;
