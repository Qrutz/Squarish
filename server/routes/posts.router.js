const postRouter = require('express').Router();
const {addPost, getAllPostByUser, userTimeline, likePost} = require('./posts.controller');


postRouter.post('/addPost', addPost); 
postRouter.get('/getAllPostByUser/:username', getAllPostByUser);
postRouter.get('/userTimeline/:username', userTimeline);
postRouter.put('/likePost', likePost);



module.exports = postRouter;