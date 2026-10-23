const jwt = require("jsonwebtoken");
const config = require("../config");

const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization;
  const userId = jwt.verify(token, config.jwtSecret);
  if (!userId) {
    throw new error("JWT not right gang");
  }
  req.user = userId;
  next();
};

module.exports = verifyJWT;
