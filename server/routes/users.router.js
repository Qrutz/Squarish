const userRouter = require('express').Router();

const {AddNewUser, logInUser,editUserBio, httpGetUser, authenticateToken, followUser, httpGetAllUsers} = require('./users.controller');
const {userTimeline} = require('./posts.controller');

userRouter.post('/register', AddNewUser);
userRouter.post('/login', logInUser);
userRouter.get('/:username',authenticateToken, httpGetUser);
userRouter.put('/editUser/',authenticateToken, editUserBio);
userRouter.get("/users/s", authenticateToken, httpGetAllUsers);
userRouter.put("/:id/follow", followUser);
userRouter.get("/getUser/sa", authenticateToken)




module.exports = userRouter;