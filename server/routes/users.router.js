const userRouter = require('express').Router();

const {AddNewUser, logInUser, httpGetUser, authenticateToken, followUser, httpGetAllUsers} = require('./users.controller');
const {userTimeline} = require('./posts.controller');

userRouter.post('/register', AddNewUser);
userRouter.post('/login', logInUser);
// get username from token and give permission to get Only that user
userRouter.get('/:username',authenticateToken, httpGetUser);

userRouter.get("/users/s", authenticateToken, httpGetAllUsers);
userRouter.put("/:id/follow", followUser);
userRouter.get("/getUser/sa", authenticateToken)




module.exports = userRouter;