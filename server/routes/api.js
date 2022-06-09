const usersRouter = require("./users.router");

const express = require("express");


const api = express.Router();


api.use("/users", usersRouter);


module.exports = api;