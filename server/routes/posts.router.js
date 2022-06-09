const postRouter = require('express').Router();
const {addPost, getAllPostByUser} = require('./posts.controller');


postRouter.post('/addPost', addPost); 
postRouter.get('/getAllPostByUser/:username', getAllPostByUser);



module.exports = postRouter;