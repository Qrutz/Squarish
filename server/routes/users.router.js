const userRouter = require('express').Router();

const {AddNewUser, logInUser} = require('./users.controller');


userRouter.post('/register', AddNewUser);
userRouter.post('/login', logInUser);


module.exports = userRouter;