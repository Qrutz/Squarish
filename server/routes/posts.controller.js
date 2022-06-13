const Post = require("../models/posts/post.mongo");
const User = require("../models/user/users.mongo");
const {getAllFollowers} = require('../models/user/users.model');

const {savePost} = require('../models/posts/post.model');


//create a post
async function addPost(req, res) {
    const { content } = req.body;
    const createdBy = req.user.username;


    try {
        const post = new Post({
            content,
            createdBy, 
        });
        await post.save();
        res.status(201).json({
            message: "Post created successfully"
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllPostByCurrentUser(req, res) {
    const username  = req.user.username;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }
        const posts = await Post.find({ createdBy: username });
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
    }
}
async function userTimeline(req, res) {
    // get all posts of the followers and the user
    const username = req.user.username;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }
        const followers = await getAllFollowers(username);
        const posts = await Post.find({ createdBy: { $in: [username, ...followers] } });
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
    }
}

async function getUserPosts(req, res) {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }
        const posts = await Post.find({ createdBy: username });
        res.status(200).json(posts);
    }
    catch (error) {
        console.log(error);
    }
}

            



async function likePost(req, res) {
    const { username, postId } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }
        const post = await Post.findOne({ _id: postId });
        if (!post) {
            return res.status(401).json({
                message: "Post not found"
            });
        }
        post.likes += 1;
        await post.save();
        res.status(200).json({
            message: "Post liked successfully"
        });   
    }
    catch (error) {
        console.log(error);
    }
}
async function deletePost(req, res) {
    const { postId } = req.body;
    const username = req.user.username;
    try {
        //check if the user is the owner of the post and then delete it if true
        const post = await Post.findOne({ _id: postId });
        if (!post) {
            return res.status(401).json({
                message: "Post not found"
            });
        }
        if (post.createdBy !== username) {
            return res.status(401).json({
                message: "You are not the owner of this post"
            });
        }
        await Post.deleteOne({ _id: postId });
        res.status(200).json({
            message: "Post deleted successfully"
        });
}
    catch (error) {
        console.log(error);
    }
}

        

module.exports = {
    addPost,
    getAllPostByCurrentUser,
    userTimeline,
    likePost,
    deletePost,
    getUserPosts
    
}
