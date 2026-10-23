const mongoose = require("mongoose");
const config = require("./config");

async function connectDb() {
  await mongoose.connect(config.db_URL);
  console.log("Database connected successfully");
}

module.exports = connectDb;
