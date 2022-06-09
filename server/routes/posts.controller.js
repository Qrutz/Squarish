const Post = require("../models/posts/post.mongo");
const User = require("../models/user/users.mongo");

const {savePost} = require('../models/posts/post.model');

async function addPost(req, res) {
    const { content, createdBy } = req.body;
    try {
        const post = new Post({
            content,
            createdBy, 
        });
        const user = await User.findOne({ username: createdBy });
        if (!user) {
            return res.status(401).json({
                message: "Cant create post with user that doesnt exist !" // user not found
            });
        }
        await post.save();
        res.status(201).json({
            message: "Post created successfully"
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function getAllPostByUser(req, res) {
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







module.exports = {
    addPost,
    getAllPostByUser
    
}
