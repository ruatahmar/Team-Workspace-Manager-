const { Router } = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");

const app = Router();

app.post("/signin", signIn);
app.post("/signup", signUp);

module.exports = app;
