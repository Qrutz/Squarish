const postRouter = require('express').Router();
const {addPost, getAllPostByUser, userTimeline} = require('./posts.controller');


postRouter.post('/addPost', addPost); 
postRouter.get('/getAllPostByUser/:username', getAllPostByUser);
postRouter.get('/userTimeline/:username', userTimeline);



module.exports = postRouter;