const { model, Schema } = require("mongoose");

const workspaceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Workspace = model("Workspace", workspaceSchema);

module.exports = Workspace;
