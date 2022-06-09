const userRouter = require('express').Router();

const {AddNewUser, logInUser, httpGetUser, followUser, httpGetAllUsers} = require('./users.controller');
const {userTimeline} = require('./posts.controller');

userRouter.post('/register', AddNewUser);
userRouter.post('/login', logInUser);
userRouter.get("/:username", httpGetUser);
userRouter.get("/users/s", httpGetAllUsers);
userRouter.put("/:id/follow", followUser);




module.exports = userRouter;