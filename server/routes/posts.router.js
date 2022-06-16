const postRouter = require('express').Router();
const {addPost, createComment,getAllComments, getAllPostByCurrentUser,getUserPosts, userTimeline, likePost, deletePost} = require('./posts.controller');
const {authenticateToken} = require("../routes/users.controller");


postRouter.post('/addPost', authenticateToken, addPost); 
postRouter.get('/getAllPostByUser/', authenticateToken, getAllPostByCurrentUser);
postRouter.get('/userTimeline/', authenticateToken, userTimeline);
postRouter.get('/getUserPosts/:username', getUserPosts);
postRouter.put('/likePost', likePost);
postRouter.delete('/deletePost', authenticateToken, deletePost);

postRouter.post('/createComment', authenticateToken, createComment);

postRouter.get('/getAllCommentsUnderPost/', getAllComments);





module.exports = postRouter;