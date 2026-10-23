const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../model/auth.model");
const { authSchema } = require("../types/types");

const signUp = async (req, res) => {
  try {
    const { data, success } = authSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({
        message: "Invalid Inputs",
      });
    }
    const { username, password } = data;
    await User.create({
      username,
      password,
    });
    return res.status(200).json({
      message: "User Created",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const signIn = async (req, res) => {
  const { data, success } = authSchema.safeParse(req.body);
  if (!success) {
    return res.status(400).json({
      message: "Invalid Input",
    });
  }
  const { username, password } = data;
  const user = await User.findOne({
    username,
    password,
  }).select("_id");
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }
  const token = createToken(user._id);
  return res.status(200).json({
    token,
  });
};

function createToken(data) {
  return jwt.sign({ userId: data }, config.jwtSecret);
}
module.exports = { signUp, signIn };
