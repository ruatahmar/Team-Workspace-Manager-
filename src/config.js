require("dotenv").config();

const config = {
  PORT: process.env.PORT,
  db_URL: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = config;
