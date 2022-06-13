const userRouter = require('express').Router();

const {AddNewUser,getFollowings, logInUser,unfollowUser, editUserBio,getFriendUserProfile, httpGetUser, authenticateToken, followUser, httpGetAllUsers} = require('./users.controller');
const {userTimeline} = require('./posts.controller');

userRouter.post('/register', AddNewUser);
userRouter.post('/login', logInUser);
userRouter.get('/:username',authenticateToken, httpGetUser);
userRouter.get('/profile/:username', getFriendUserProfile);
userRouter.put('/editUser/',authenticateToken, editUserBio);
userRouter.get("/users/s", httpGetAllUsers);
userRouter.put("/follow/:following", authenticateToken, followUser);
userRouter.get("/getUser/sa", authenticateToken)
userRouter.get("/following/people", authenticateToken, getFollowings);
userRouter.put("/unfollow/:following", authenticateToken, unfollowUser);




module.exports = userRouter;