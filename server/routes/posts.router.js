const postRouter = require('express').Router();
const {addPost} = require('./posts.controller');


postRouter.post('/addPost', addPost); 



module.exports = postRouter;