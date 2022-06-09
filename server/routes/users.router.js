const usersRouter = require('express').Router();
const {httpGetAllUsers} = require('./users.controller');

usersRouter.get('/users', httpGetAllUsers);


module.exports = usersRouter;