const postRouter = require('express').Router();
const {addPost, getAllPostByUser, userTimeline, likePost, deletePost} = require('./posts.controller');


postRouter.post('/addPost', addPost); 
postRouter.get('/getAllPostByUser/:username', getAllPostByUser);
postRouter.get('/userTimeline/:username', userTimeline);
postRouter.put('/likePost', likePost);
postRouter.delete('/deletePost', deletePost);




module.exports = postRouter;