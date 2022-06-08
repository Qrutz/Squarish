const usersRouter = require('express').Router();
const {httpGetAllUsers} = require('./users.controller');

usersRouter.get('/', httpGetAllUsers);


module.exports = usersRouter;