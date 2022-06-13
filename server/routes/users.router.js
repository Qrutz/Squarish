const userRouter = require('express').Router();

const {AddNewUser,getFollowings, logInUser,editUserBio,getFriendUserProfile, httpGetUser, authenticateToken, followUser, httpGetAllUsers} = require('./users.controller');
const {userTimeline} = require('./posts.controller');

userRouter.post('/register', AddNewUser);
userRouter.post('/login', logInUser);
userRouter.get('/:username',authenticateToken, httpGetUser);
userRouter.get('/profile/:username', getFriendUserProfile);
userRouter.put('/editUser/',authenticateToken, editUserBio);
userRouter.get("/users/s", authenticateToken, httpGetAllUsers);
userRouter.put("/:id/follow", followUser);
userRouter.get("/getUser/sa", authenticateToken)
userRouter.get("/following/people", authenticateToken, getFollowings);




module.exports = userRouter;