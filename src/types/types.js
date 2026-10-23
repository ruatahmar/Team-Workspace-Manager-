const { z } = require("zod");

const authSchema = z.object({
  username: z.string().min(1).max(20),
  password: z.string().min(6).max(30),
});

const workspaceSchema = z.object({
  name: z.string().min(1).max(20),
});

const taskSchema = z.object({
  title: z.string().min(1).max(30),
  description: z.string().min(10).max(100),
});

module.exports = { authSchema, workspaceSchema, taskSchema };
