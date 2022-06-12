const postRouter = require('express').Router();
const {addPost, getAllPostByUser, userTimeline, likePost, deletePost} = require('./posts.controller');
const {authenticateToken} = require("../routes/users.controller");


postRouter.post('/addPost', authenticateToken, addPost); 
postRouter.get('/getAllPostByUser/', authenticateToken, getAllPostByUser);
postRouter.get('/userTimeline/', authenticateToken, userTimeline);
postRouter.put('/likePost', likePost);
postRouter.delete('/deletePost', authenticateToken, deletePost);




module.exports = postRouter;